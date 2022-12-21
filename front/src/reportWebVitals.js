/*
- metric(측정도구) 이름
  => name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB';
- 측정된 현재값 (값이 작을수록 빠른성능을 뜻합니다)
  => value: number;
- 현재 측정값(current value)과 최신 측정값(last-reported value) 차이
  첫번째 리포트에서 위 둘값은 항상 같습니다.
  => delta: number;
- 특정 측정도구를 나타대는 유니크한 ID 값으로 중복되는 값들을 관리할 때 사용된다.
  => id: string;
- 계산된 측정값들의 내용들이 배열로 나열 된다.
  ex) PerformanceNavigationTiming, LargestContentfulPaint
  => entries: (PerformanceEntry | FirstInputPolyfillEntry | NavigationTimingPolyfillEntry)[];
*/
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
