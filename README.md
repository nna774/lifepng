# lifepng
[![Code Climate](https://codeclimate.com/github/nna774/lifepng.png)](https://codeclimate.com/github/nna774/lifepng)

## なにこれ

![こんな](https://nna774.net/img/glider.png)
上記のようなアイコンが欲しくて、gimp で描いたのですが、ライフゲームのいろんな物体のアイコンを作りたくなった時に、毎回手で描くのはいやだと思って作りました。

テキストエリアに1 を生きているマス、それ以外を死んでいるマスとして、一文字一セルで書きます。
このとき、いちばん長い行の長さに全体の長さは揃えられます(足りないところは死んでると見做されます)。

描画ボタンを押すと、現在のテキストエリアの中身を描画します。

next ボタンを押すと、一世代テキストエリアの中を進めて、それを描画します。

random ボタンは、現在のテキストエリアの幅で、中の生死をランダムに配置します。

Export as PNG は、現在描画されているものをエクスポートします。

## こんなのとかも作れます

Export したファイルをgif アニメーションにすることで、夢が広がりますね。

![](https://nna774.net/img/life/clock2.gif)


## こことかで使えます

* [LifePNG - いっと☆わーくす！](https://nna774.net/lifepng/)
* [gh-pages](http://nna774.github.io/lifepng/)

## LICENSE
lifepng.js, index.html は[MIT License](http://opensource.org/licenses/mit-license.php) とします。

また、lifepng の中に埋め込まれている画像([ここ](https://nna774.net/lifepng/life/) に元の画像があります) については、
<a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/"><img src="http://i.creativecommons.org/p/zero/1.0/80x15.png" style="border-style: none;" alt="CC0" />(CC0)</a> とします。

## ref

[ライフゲーム - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0)
