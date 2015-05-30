#grunt karma mocha chaiを利用したBDD環境の構築

##インストール

###1.初期プロジェクト作成
npm init

###2.gruntとgrunt-karmaをインストール
npm install --save-dev grunt grunt-karma

###3.karma初期設定
karma init
Which testing framework do you want to use ? (mocha)
Do you want to use Require.js ? (no)
Do you want to capture any browsers automatically ? (Chrome)
What is the location of your source and test files ? (*.js)
Should any of the files included by the previous patterns be excluded ? ()
Do you want Karma to watch all the files and run the tests on change ? (yes)

###4.mochaとchaiをインストール
npm install --save-dev karma-mocha karma-chai

###5.karma.conf.jsのframeworksに'chai'を追記
frameworks: ['mocha', 'chai']

###6.Gruntfile.jsを作成
karma: {
	unit: {
		configFile: 'karma.config.js'
	}
}

grunt.registerTask('test', ['karma']);

###7.テスト実行
grunt test


##試行錯誤する
###ファイルの順番に依存関係はないか
関係なし

###モジュール化は同じ名称を別ファイルで定義すると上書きされるか？また、回避できるか？
上書きされる
但し、以下の書き方すれば回避できる
var ns = exports.ns || {};
