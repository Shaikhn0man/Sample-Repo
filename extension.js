
const vscode = require("vscode");
const axios = require('axios');

/**
 * @param {vscode.ExtensionContext} context
 */

 const editor = vscode.window.activeTextEditor;
 if (!editor) {
     return; 
 }
 
function activate(context) {
   

    function get_uri() {
        var keyword  = editor.selection.isEmpty ?
        
			editor.document.lineAt(editor.selection.active.line).keyword :
			editor.document.getText(editor.selection);


        var selection = editor.selection;
        if (!selection.isEmpty) {
            keyword = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            keyword = editor.document.getText(range);
        }

        if (keyword.length == 0) {
            vscode.window.showErrorMessage( 
                "Rapidx: Null string in text variable."
            );
            keyword = "";
        }
        const url = "https://638444eb4ce192ac6053309c.mockapi.io/explain";
//  const getData=()=>{
//      axios.get('https://638444eb4ce192ac6053309c.mockapi.io/explain').then(response=>{
//         //  console.log(response);
//      })
//  }
//  getData();
        //added 
        // fetch(url).then(function (response) {
        //             return response.json();
        //    }).then(function (obj) {
        //     console.log(obj);
        //     })

        
        let uri = vscode.Uri.parse(url + "#q=" + keyword);
        return uri;
    }

    function get_urib() {
        
       var keyword  = editor.selection.isEmpty ?
        
			editor.document.lineAt(editor.selection.active.line).keyword :
			editor.document.getText(editor.selection);


        var selection = editor.selection;
        if (!selection.isEmpty) {
            keyword = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            keyword = editor.document.getText(range);
        }

        if (keyword.length == 0) {
            vscode.window.showErrorMessage( 
                "Rapidx: Null string in text variable."
            );
            keyword = "";
        }
        const url = "https://638444eb4ce192ac6053309c.mockapi.io/generate/1";
        let uri = vscode.Uri.parse(url + "#q=" + keyword);

        return keyword;
    }
 

// 		<style>
// 		<style>
    // body { margin: 0; background-color: white; }
    // iframe{ position: fixed; top: 0; left: 0 }
    // </style>
	// 		<iframe src=${url} width="100%"" height="100%" frameborder="0"  scrolling="yes"></iframe>
    function htmlMaker(url) {
        const html = `
        <html>  
        <head>  
        <title> Login Form</title>
        <style>
        .outer-box{
            background:#305082;
            border-radius: 5px;
            padding : 5px;
        }
        .inner-box{
            background:black;
            border-radius: 5px;
            padding : 5px;
        }
        .list{
          
            font-size: 16px;
            list-style-type: disc;
            padding: 0;

        }
        </style>
        </head>
            <body>  
                <div class="outer-box">
                    #detected-language
                    <div class="inner-box">
                        <div class="list" >
                       
                            <ul id="list">
                            </ul>
                        </div>
                    </div>
                  
                    was this accurate? <button>Yes</button><button>No</button>
                </div>
        <script>
        const url = "https://638444eb4ce192ac6053309c.mockapi.io/explain";
        
                //added
                fetch(url).then(function (response) {
                             return response.json();
                    }).then(function (obj) {
        console.log(obj[0].explanation);
        for (let i = 0; i < obj[0].explanation.length; i++)
                     document.getElementById("list").innerHTML += "<li>"+ obj[0].explanation[i] +"</li>";
                     })
        </script>
            </body>
        </html>
        	`
        return html;
    }
    function htmlMakera(keyword) {
        const html = `<html>
        <head>
          <title>Login Form</title>
          <style>
            .outer-box {
              background: #1e2430;
              border-radius: 5px;
              padding: 5px;
              color: white;
            }
            .inner-box {
              background: black;
              border-radius: 15px;
              padding: 15px;
            }
            .paragraph {
              background: black;
              font-size: 12px;
              border-radius: 5px;
              margin: 5px;
              padding: 5px;
              grid-column: span 6/8;
              grid-column-start: 1;
              grid-column-end: 7;
               overlay:hidden;
            }
            .paragraphb {
              background: black;
              font-size: 12px;
              border-radius: 5px;
              margin: 5px;
              padding: 5px;
              grid-column: span 6/8;
              grid-column-start: 7;
              grid-column-end: 13;
               overlay:hidden;
            }
            .paragraphc {
              background: black;
              font-size: 12px;
              border-radius: 5px;
              margin: 10px;
              padding: 5px;
              grid-column: span 6/8;
              grid-column-start: 7;
              grid-column-end: 13;
               overlay:hidden;
            }.p1 {
        font-family: "Times New Roman", Times, serif;
        color: goldenrod;
      }
            .load-more {
              left: 30px;
            }
            .grid {
              display: grid;
              grid-area: main;
              grid-template-columns: repeat(12, 1fr);
              grid-gap: 2px;
              overlay:hidden;
            }
            .col-1 {
              grid-column: span 6/8;
              min-height: 50px;
              background-color: black;
              border-radius: 5px;
              padding: 5px;
              margin: 5px;
              color: white;
              grid-column-start: 1;
              grid-column-end: 7;
            }
            .col-2 button {
              grid-column: span 2;
              min-height: 50px;
              background-color: #1e9de0;
              border-radius: 5px;
              padding: 5px;
              margin: 5px;
              color: black;
            }
            table{
               color: white;
            }
            td{
               padding: 20px;
            }
            .before{
               color: red;
            }
            .after{
               color: green;
            }
      
          </style>
        </head>
        <body>
          <div class="outer-box">
            What do you want rapidx to generate? <br />
            <div class="grid">
                    <span class="col-1" id="keyword">  ${keyword} </span>
        <span class="col-2">
          <button id="load-more">Generate Snippet</button>
        </span>

             
            </div>
            <div class="grid">
              <div class="paragraph" id="paragraph"></div>
              <div class="paragraphb" id="paragraphb">
               <br>                    
               <br>                    
      
              </div>
              
            </div>
      
            was this accurate? <button>Yes</button><button>No</button>
            
             
          <script>
            const loadMoreBtn = document.getElementById("load-more");
            loadMoreBtn.addEventListener("click", show);
      
            function show() {
              fetch("https://638444eb4ce192ac6053309c.mockapi.io/refine/1")
                .then(function (response) {
                  return response.json();
                })
                .then(function (obj) {
                  console.log(obj.ratings);
                  for (let i = 0; i < obj.snippet.length; i++)
                    document.getElementById("paragraph").innerHTML += obj.snippet[i];
      
      
                    document.getElementById("paragraphb").innerHTML +='<p class= "p1">Benefits of this </p>'+'<br>'+'<br>'+'Benefits-'+'<br>';                                           
                  for (let i = 0; i < obj.benefits.length; i++)
                    document.getElementById("paragraphb").innerHTML +=
                      obj.benefits[i];
      
                      document.getElementById("paragraphb").innerHTML += '<p class="p1">Read More On This -    </p>'+'<br>';
                  for (let i = 0; i < obj.moreinfo.length; i++)
                    document.getElementById("paragraphb").innerHTML +=obj.moreinfo[i];
                       document.getElementById("paragraphb").innerHTML += '<p class="p1">Demo Link -    </p>'+'<br>';
                    document.getElementById("paragraphb").innerHTML +=obj.demolink;
      
                  
      
                });
            }
          </script>
        </body>
      </html>`
        return html;
    }

    function htmlMakerc() {
        const html = `
        <html>
  <head>
    <title>Login Form</title>
    <style>
      .outer-box {
        background: #1e2430;
        border-radius: 5px;
        padding: 5px;
        color: white;
      }
      .inner-box {
        background: black;
        border-radius: 15px;
        padding: 15px;
      }
      .paragraph {
        background: black;
        font-size: 12px;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        grid-column: span 6/8;
        grid-column-start: 1;
        grid-column-end: 7;
      }
      .paragraphb {
        background: black;
        font-size: 12px;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        grid-column: span 6/8;
        grid-column-start: 7;
        grid-column-end: 13;
      }
      .paragraphc {
        background: black;
        font-size: 12px;
        border-radius: 5px;
        margin: 10px;
        padding: 5px;
        grid-column: span 6/8;
        grid-column-start: 7;
        grid-column-end: 13;
      }.p1 {
        font-family: "Times New Roman", Times, serif;
        color: goldenrod;
      }
      .load-more {
        left: 30px;
      }
      .grid {
        display: grid;
        grid-area: main;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 2px;
      }
      .col-1 {
        grid-column: span 6/8;
        min-height: 50px;
        background-color: black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        color: white;
        grid-column-start: 1;
        grid-column-end: 7;
      }
      .col-2 button {
        grid-column: span 2;
        min-height: 50px;
        background-color: #1e9de0;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        color: black;
      }
      table{
         color: white;
      }
      td{
         padding: 20px;
      }
      .before{
         color: red;
      }
      .after{
         color: green;
      }

    </style>
  </head>
  <body>
    <div class="outer-box">
     Insert Refined Code <br />
      <div class="grid">
        
      </div>
      <div class="grid">
        <div class="paragraph" id="paragraph">
        <br>
        </div>
        <div class="paragraphb" id="paragraphb"><br></div>
      </div>

      was this accurate? <button>Yes</button><button>No</button>
      <span class="col-2">
        <button id="load-more">Insert Code</button>
             </span>
          
    </div>
    <script>
      const loadMoreBtn = document.getElementById("load-more");
      loadMoreBtn.addEventListener("click", show);

      function show() {}
      
        fetch("https://638444eb4ce192ac6053309c.mockapi.io/refine/1")
          .then(function (response) {
            return response.json();
          })
          .then(function (obj) {
            console.log(obj.ratings);
            for (let i = 0; i < obj.snippet.length; i++)
              document.getElementById("paragraph").innerHTML += obj.snippet[i];
              document.getElementById("paragraphb").innerHTML +='<p class= "p1">Why Is This Code Better  </p>'+'<br>'+'<br>'+'Benefits-'+'<br>';
            for (let i = 0; i < obj.benefits.length; i++)
              document.getElementById("paragraphb").innerHTML +=
                obj.benefits[i];
                

            let table = ' <br><br><br> <table><tr><th></th><th class="before">Before</th><th class="after">After</th></tr>';
               let table_end = "</table>";
            let html = "";
            // document.getElementById("paragraphb").innerHTML += table_start;

            console.log(obj.ratings.length);
            for(var i in obj.ratings){
               let key = i;
               let dict = obj.ratings[i];
               let before = dict["before"];
               let after = dict["after"];
               console.log(key +"-" + before + "-" + after);
               html += '<tr><td>'+key+'</td><td class="before">'+before+'</td><td class="after">'+after+'</td></tr>';
            }
            table+= html + table_end;
            document.getElementById("paragraphb").innerHTML += table;
document.getElementById("paragraphb").innerHTML +='<p class ="p1">More Info- </p>'+'<br>';

            for (let i = 0; i < obj.moreinfo.length; i++)
              document.getElementById("paragraphb").innerHTML +=obj.moreinfo[i];
          });
      
    </script>
  </body>
</html>`
        	
        return html;
    }
      let currentPanel = undefined;

    let homeCommand = vscode.commands.registerCommand("RapidX.home", function () {
        const columnToShowIn = vscode.ViewColumn.Two;

        if (currentPanel) {
            currentPanel.reveal(columnToShowIn);
            currentPanel.webview.html = htmlMaker("https://638444eb4ce192ac6053309c.mockapi.io/explain");
        } else {
            currentPanel = vscode.window.createWebviewPanel(
                "Rapidx",
                "Rapidx",
                columnToShowIn,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    enableCommandUris: true,
                }
            );
            currentPanel.webview.html = htmlMaker("https://638444eb4ce192ac6053309c.mockapi.io/explain");
            currentPanel.onDidDispose(
                () => {
                    currentPanel = undefined;
                },
                null,
                context.subscriptions
            );
        }
    });

    let searchCommand = vscode.commands.registerCommand("CodeIQ.Explain", function () {
        const columnToShowIn = vscode.ViewColumn.Two;

        if (currentPanel) {
            currentPanel.reveal(columnToShowIn);
            currentPanel.webview.html = htmlMaker(get_uri());
        } else {
            currentPanel = vscode.window.createWebviewPanel(
                "Rapidx",
                "Rapidx",
                columnToShowIn,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    enableCommandUris: true,
                }
            );
            currentPanel.webview.html = htmlMaker(get_uri());
            currentPanel.onDidDispose(
                () => {
                    currentPanel = undefined;
                },
                null,
                context.subscriptions
            );
        }
    });

    let preferencesCommand = vscode.commands.registerCommand("CodeIQ.Refine", function () {
        const columnToShowIn = vscode.ViewColumn.Two;

        if (currentPanel) {
            currentPanel.reveal(columnToShowIn);
            currentPanel.webview.html = htmlMakerc();
        } else {
            currentPanel = vscode.window.createWebviewPanel(
               "Rapidx",
                "Rapidx",
                columnToShowIn,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    enableCommandUris: true,
                }
            );
            currentPanel.webview.html = htmlMakerc();
            currentPanel.onDidDispose(
                () => {
                    currentPanel = undefined;
                },
                null,
                context.subscriptions
            );
        }
    });

    let offlineCommand = vscode.commands.registerCommand("CodeIQ.GenerateCode", function () {
        const columnToShowIn = vscode.ViewColumn.Two;

        if (currentPanel) {
            currentPanel.reveal(columnToShowIn);
            currentPanel.webview.html = htmlMakera(get_urib());
        } else {
            currentPanel = vscode.window.createWebviewPanel(
               "Rapidx",
                "Rapidx",
                columnToShowIn,
                {
                    enableScripts: true,    
                    retainContextWhenHidden: true,
                    enableCommandUris: true,
                }
            );
            currentPanel.webview.html = htmlMakera(get_urib());
            currentPanel.onDidDispose(
                () => {
                    currentPanel = undefined;
                },
                null,
                context.subscriptions
            );
        }
    });

    context.subscriptions.push(homeCommand, searchCommand, preferencesCommand, offlineCommand)
        
}

function deactivate() { }

module.exports = {
    activate,
    deactivate, 
};
