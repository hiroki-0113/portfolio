<template>
  <div>
    <div class="container">
      <h1 class="works"><i class="fas fa-pen"></i>works</h1>
      <div class="work">
        <h1 class="title">Portfolio site</h1>
        <h3>langage：HTML,CSS,SASS,VUE</h3>
        <h3>github：<a href="https://github.com/hiroki-0113/portfolio">portfolio code</a></h3>
        <h3>pages：<a href="https://hiroki-portfolio.netlify.app/works">netlify pages</a></h3>
        <h3>point：ポートフォリオサイトをvue cliをベースに作成しました。vue typerのタイピングアニメーションでおしゃれなデザインにしました。</h3>
      </div>

      <div class="work">
        <h1 class="title">contact form(1,2)</h1>
        <h3>langage：HTML,CSS,PHP</h3>
        <h3>github：<a href="https://github.com/hiroki-0113/Contact-Form/blob/master/contactform.php">contactform1 code</a></h3>
        <h3>github：<a href="https://github.com/hiroki-0113/Contact-Form2">contactform2 code</a></h3>
        <h3>point：PHPを使用したお問い合わせフォーム2種類。contactform1は1つのファイル、contactform2は3つのファイルに分けて作成しました。</h3>
      </div>

      <div class="work">
        <h1 class="title">sign-up</h1>
        <h3>langage：HTML,CSS,PHP,SQL</h3>
        <h3>github：<a href="https://github.com/hiroki-0113/Contact-Form2">signup code</a></h3>
        <h3>point：PHPとSQLを使用した登録フォーム。SQLと連結してデータ管理できるようにしました。</h3>
      </div>

      <div class="work">
        <h1 class="title">Birthday site</h1>
        <h3>langage：HTML,CSS,SASS,JS</h3>
        <h3>github：<a href="https://github.com/hiroki-0113/natsuki.com">birthday site code</a></h3>
        <h3>pages：<a href="https://hiroki-0113.github.io/natsuki.com/">github pages</a></h3>
        <h3>point：彼女の誕生日にサイトをプレゼントしたら面白いと思い作成しました。sassでハンバーガーメニューをクリックすると矢印のマークになり、メニューが飛び出してくる仕様にしました。</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.container{
  font-family: 'Courier';
}
  .works{
    font-size: 50px;
    text-align: center;
    @media screen and(min-width: 600px){
      font-size: 60px;
      margin-bottom: 80px;
    }
  }
  .title{
    text-align: center;
  }
  .work{
    border: black 6px solid;
    width: 290px;
    margin-bottom: 20px;
    @media screen and(min-width: 600px){
      width: 400px;
      margin:0 auto;
      padding: 20px;
      margin-bottom: 90px;
    }
  }
  h3{
    word-wrap: break-word;
  }
</style>
