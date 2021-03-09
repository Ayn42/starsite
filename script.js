 $(document).ready(function(){
      $('.slider').bxSlider();
    });

ScrollReveal().reveal('.box1', {
        duration: 800, // アニメーションの完了にかかる時間
        viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
        reset: true // 何回もアニメーション表示するか
    });

ScrollReveal().reveal('.box1');