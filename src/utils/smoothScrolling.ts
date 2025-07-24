// Enhanced smooth scrolling for variable refresh rates
class AdaptiveSmoothScrolling {
  private rafId: number = 0;
  private actualRefreshRate: number = 60;
  private frameTimestamps: number[] = [];
  private isDetecting: boolean = false;

  constructor() {
    this.detectRefreshRate();
    this.initializeScrollHandling();
  }

  private detectRefreshRate() {
    if (this.isDetecting) return;
    this.isDetecting = true;

    const detectFrames = () => {
      this.frameTimestamps.push(performance.now());
      
      // Keep only last 60 frames for accurate detection
      if (this.frameTimestamps.length > 60) {
        this.frameTimestamps.shift();
      }

      // Calculate refresh rate after collecting enough frames
      if (this.frameTimestamps.length >= 10) {
        const totalTime = this.frameTimestamps[this.frameTimestamps.length - 1] - this.frameTimestamps[0];
        const avgFrameTime = totalTime / (this.frameTimestamps.length - 1);
        this.actualRefreshRate = Math.round(1000 / avgFrameTime);
        
        // Clamp to realistic values and account for fluctuation
        this.actualRefreshRate = Math.max(50, Math.min(144, this.actualRefreshRate));
      }

      if (this.frameTimestamps.length < 60) {
        requestAnimationFrame(detectFrames);
      } else {
        this.isDetecting = false;
      }
    };

    requestAnimationFrame(detectFrames);
  }

  private initializeScrollHandling() {
    // Override smooth scroll behavior
    const originalScrollTo = window.scrollTo;
    const originalScrollBy = window.scrollBy;

    window.scrollTo = (options: ScrollToOptions | number, y?: number) => {
      if (typeof options === 'object' && options.behavior === 'smooth') {
        this.smoothScrollTo(options.top || 0);
      } else if (typeof options === 'number' && typeof y === 'number') {
        originalScrollTo.call(window, options, y);
      } else {
        originalScrollTo.call(window, options as ScrollToOptions);
      }
    };

    // Handle scroll events for momentum
    let isScrolling = false;
    let scrollTimer: NodeJS.Timeout;

    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        document.body.style.pointerEvents = 'none';
        isScrolling = true;
      }

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
        isScrolling = false;
      }, 150);
    }, { passive: true });
  }

  private smoothScrollTo(targetY: number) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = Math.min(1000, Math.abs(distance) * 0.5); // Adaptive duration
    let startTime: number;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        this.rafId = requestAnimationFrame(animation);
      }
    };

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    
    this.rafId = requestAnimationFrame(animation);
  }

  public getActualRefreshRate(): number {
    return this.actualRefreshRate;
  }

  public destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}

export const initializeSmoothScrolling = () => {
  return new AdaptiveSmoothScrolling();
};
