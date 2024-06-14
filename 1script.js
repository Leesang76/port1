/* 로딩 애니메이션 */
body.loading::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7) url('https://via.placeholder.com/64') no-repeat center center;
    z-index: 10000;
}
