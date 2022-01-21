<div class="indicator">
  <span />
  <span />
  <span />
</div>

<style lang="postcss">
  .indicator {
    position: relative;
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
  }
  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    animation: animate 1s linear infinite;
  }
  span:nth-child(1) {
    top: -10px;
    left: -10px;
    animation-delay: 0.2s;
  }
  span:nth-child(2) {
    top: 0;
    left: 0;
    animation-delay: 0.4s;
  }
  span:nth-child(3) {
    top: 10px;
    left: 10px;
    animation-delay: 0.6s;
  }
  @keyframes animate {
    0% {
      border-color: #fff;
      transform: translate(0, 0);
    }
    20% {
      border-color: #fff;
      transform: translate(10px, 10px);
    }
    20.1%,
    100% {
      border-color: #d97706;
    }
  }
</style>
