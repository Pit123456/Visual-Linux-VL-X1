
//----------------Var Counters--------------------------------//

		var fileCounter=0;
		var folderCounter=0;
		var commandCounter=0;
		var VcommandCounter=0;
		var TcommandCounter=0;
		var sizeWindow=1;
     		
		var Tcounter=0;
		var Vcounter=0;

		var textMacroOpen=0;
		var visualMacroOpen=0;

		var TmacroCount=0;
		var VmacroCount=0;

		var runOnceTextFunc=1;
		var runOnceVisualFunc=1;

		var vLastMacro=false;
		var tLastMacro=false;

		var openTMacro=0;
		var openVMacro=0;

		var currentVCommand="";
		var currentTCommand="";
		var userMeta=JSON.parse(localStorage.getItem("userMeta"));


//------------------Pop-Up------------------------------------//

		function newManCD() {
			popupWindow = window.open(
				"manCD.html",'popUpWindow','height=300,width=520,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
		}

		function ynewPopupCP() {
			popupWindow = window.open(
				"manCD.html",'popUpWindow','height=320,width=520,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
		}

		function ynewPopupMove(url) {
			popupWindow = window.open(
			url,'popUpWindow','height=320,width=520,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
		}

		function ynewPopupAccess(url) {
			popupWindow = window.open(
			url,'popUpWindow','height=560,width=630,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
		}

//------------------------------------------------------------//

//-----------------Window Pop Up------------------------------//

		function newPopupCD() {
			currentCommand='cd';
			if(sizeWindow==0){
				resize();
			}
			var CD = '<div id="cd">'+

						'<div id="fRow">'+

							'<section class="Hframe">'+
								'<h2>Change Directory</h2>'+
							'</section>'+

							'<section class="CDframe">'+
								'<a href="#"><img id="man" src="images/mark.png"></a>'+
							'</section>'+

							'<section class="frame">'+
								'<a href="JavaScript:newManCD();"><img id="man" src="images/man.png"></a>'+
							'</section>'+
			
							'<div class="clear"></div>'+

							'<div id="removeRow">'+
								'<a href="JavaScript:enterBrowse(1);"><img id="vplus2" src="images/3.png"></a>'+
								'<div class="clear"></div>'+
								'<input type="file" class="inputCD" id="browser1"/>'+
								'<div class="clear"></div>'+
								'<input class="create2" id="Input1" type=text name=Fname placeholder="Destination Path" onkeydown = "if (event.keyCode == 13) inputCD()">'+
							'</div>'+

							'<div id="tCreateRow">'+
								'<a href="#"><img id="save" src="images/save.png"></a>'+
								'<a href="JavaScript:inputCD();"><img id="save" src="images/v.png"></a>'+
								'<a href="#"><img id="save2" src="images/undo.png"></a>'+
							'</div>'+
						'</div>'+

					'</div>'
			document.getElementById("fileDetails").innerHTML=CD ;
		}

		function newPopupCP(str) {
			currentCommand='cp';
			if(sizeWindow==0){
				resize();
			}
			if(str==null){
				str="";
			}
			var CP = '<div id="cp">'+

						'<div id="fCPRow">'+

							'<section class="Hcopyframe">'+
								'<h2>Copy</h2>'+
							'</section>'+

							'<section class="frame">'+
								'<a href="#"><img id="man" src="images/mark.png"></a>'+
							'</section>'+

							'<section class="frame">'+
								'<a href="#"><img id="man" src="images/man.png"></a>'+
							'</section>'+
			
							'<div class="clear"></div>'+

							'<div id="tCPRow">'+
								'<a href="#"><img id="save" src="images/save.png"></a>'+
								'<a href="JavaScript:inputCopy();"><img id="save" src="images/v.png"></a>'+
								'<a href="#"><img id="save2" src="images/undo.png"></a>'+
							'</div>'+

							'<div id="parameters">'+
								'<h4>Parameters</h4>'+
								'<a href="JavaScript:openCopyParameters();"><img id="plus" src="images/2.png"></a>'+
								'<input class="para" id="inputPara1" value="'+str+'" type=text name=P1 placeholder="Para 1">'+
							'</div>'+

							'<div id="STRow">'+
								'<h4>Source</h4>'+
								'<a href="JavaScript:enterBrowse(1);"><img id="vplus" src="images/3.png"></a>'+
								'<input type="file" id="browser1"/>'+
								'<input class="browse" id="Input1" type=text name=Fname placeholder="Path" onkeydown = "if (event.keyCode == 13) inputCopy()">'+
							'</div>'+

							'<div id="STRow">'+
								'<h4>Target</h4>'+
								'<a href="JavaScript:enterBrowse(2);"><img id="vplus" src="images/3.png"></a>'+
								'<input type="file" id="browser2"/>'+
								'<input class="browse" id="Input2" type=text name=Fname placeholder="Path" onkeydown = "if (event.keyCode == 13) inputCopy()">'+
							'</div>'+

						'</div>'+
					'</div>'
			document.getElementById("fileDetails").innerHTML=CP ;	
		}

		function newPopupRename(str) {
			currentCommand='rename';
			if(sizeWindow==0){
				resize();
			}
			if(str==null){
				str="";
			}
			var Rename = '<div id="cp">'+

				'<div id="fCPRow">'+

					'<section class="Hrenameframe">'+
						'<h2>Rename</h2>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="tCPRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="JavaScript:inputRename();"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+

					'<div id="parameters">'+
						'<h4>Parameters</h4>'+
						'<a href="JavaScript:openRenameParameters();"><img id="plus" src="images/2.png"></a>'+
						'<input class="para" id="inputPara1" value="'+str+'" type=text name=P1 placeholder="Para 1">'+
					'</div>'+

					'<div id="STRow">'+
						'<h4>Source</h4>'+
						'<a href="JavaScript:enterBrowse(1);"><img id="vplus" src="images/3.png"></a>'+
						'<input type="file" id="browser1"/>'+
						'<input class="browse" id="Input1" type=text name=Fname placeholder="Path" onkeydown = "if (event.keyCode == 13) inputRename()">'+
					'</div>'+

					'<div id="STRow">'+
						'<h4 class="Hrename">New Name</h4>'+
						'<input class="browse" id="InputName" type=text name=newName placeholder="New Name" onkeydown = "if (event.keyCode == 13) inputRename()">'+
						//'<button class="popCPbtm"><a href="#">OK</a></button>'+
					'</div>'+

				'</div>'+
			'</div>'

			document.getElementById("fileDetails").innerHTML=Rename ;	
		}

		function newPopupCreate(str) {
			currentTCommand='cat';
			currentVCommand='Create_File';
			if(sizeWindow==0){
				resize();
			}
			if(str==null){
				str="";
			}
			var Create = '<div id="cp">'+

				'<div id="fCPRow">'+

					'<section class="Hcreateframe">'+
						'<h2>Create File</h2>'+
					'</section>'+

					'<section class="Mframe">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="parameters">'+
						'<h4>Parameters</h4>'+
						'<a href="JavaScript:openCreateParameters();"><img id="plus" src="images/2.png"></a>'+
						'<input class="para" id="inputPara1" value="'+str+'" type=text name=P1 placeholder="Para 1">'+
					'</div>'+

					'<div id="createRow">'+
						'<h4 class="Hcreate">New File</h4>'+
						'<input class="create" id="InputCreate" type="text" name="FileName" placeholder="File Name" onkeydown = "if (event.keyCode == 13) inputCreate()">'+
					'</div>'+

					'<div id="tCreateRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="JavaScript:inputCreate();"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+	
				'</div>'+
			'</div>'
			document.getElementById("fileDetails").innerHTML=Create ;	
		}

		function newPopupMake(str) {
			currentCommand='mkdir';
			if(sizeWindow==0){
				resize();
			}
			if(str==null){
				str="";
			}
			var Make = '<div id="cp">'+

				'<div id="fCPRow">'+

					'<section class="Hfolderframe">'+
						'<h2>Create Folder</h2>'+
					'</section>'+

					'<section class="Mframe">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="cd.html" target="popup"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="parameters">'+
						'<h4>Parameters</h4>'+
						'<a href="JavaScript:openMakeParameters();"><img id="plus" src="images/2.png"></a>'+
						'<input class="para" id="inputPara1" value="'+str+'" type=text name=P1 placeholder="Para 1">'+
					'</div>'+	

					'<div id="createRow">'+
						'<h4 class="Hcreate">New Folder</h4>'+
						'<input class="create" id="InputMake" type=text name=Fname placeholder="Folder Name" onkeydown = "if (event.keyCode == 13) inputMake()">'+
					'</div>'+

					'<div id="tCreateRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="JavaScript:inputMake();"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+
				'</div>'+
			'</div>'
			document.getElementById("fileDetails").innerHTML=Make ;	
		}

		function newPopupMove() {
			currentCommand='mv';
			if(sizeWindow==0){
				resize();
			}
			var Move = '<div id="move">'+

				'<div id="fCPRow">'+

					'<section class="Hmoveframe">'+
						'<h2>Move Directory</h2>'+
					'</section>'+

					'<section class="Cframe">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="moveRow">'+
						'<h4>Source</h4>'+
						'<button class="popCreatebtm"><a href="#">Browse</a></button>'+
						'<button class="popCreatebtm"><a href="#">OK</a></button>'+
						'<input class="create" type=text name=Fname placeholder="Source Folder Name">'+
					'</div>'+

					'<div id="moveRow">'+
						'<h4>Target</h4>'+
						'<button class="popCreatebtm"><a href="#">Browse</a></button>'+
						'<button class="popCreatebtm"><a href="#">OK</a></button>'+
						'<input class="create" type=text name=Fname placeholder="Target Folder Name">'+
					'</div>'+

					'<div id="tCreateRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a'+
						'<a href="#"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+		
				'</div>'+
			'</div>'
			document.getElementById("fileDetails").innerHTML=Move ;	
		}

		function newPopupRemove() {
			currentCommand='rm';
			if(sizeWindow==0){
				resize();
			}
			var Remove = '<div id="remove">'+

				'<div id="fCPRow">'+

					'<section class="Hremoveframe">'+
						'<h2>Remove Directory</h2>'+
					'</section>'+

					'<section class="Rframe">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="removeRow">'+
						'<a href="JavaScript:enterBrowse(1);"><img id="vplus2" src="images/3.png"></a>'+
						'<div class="clear"></div>'+
						'<input type="file" class="inputCD" id="browser1"/>'+
						'<div class="clear"></div>'+
						'<input class="create2" id="Input1" type=text name=Fname placeholder="Destination Path" onkeydown = "if (event.keyCode == 13) inputRemove()">'+
					'</div>'+

					'<div id="tCreateRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="JavaScript:inputRemove();"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+	
				'</div>'+
			'</div>'
			document.getElementById("fileDetails").innerHTML=Remove ;	
		}

		function newPopupAccess() {
			if(sizeWindow==0){
				resize();
			}
			var Access = '<div id="access">'+

							'<div id="fCPRow">'+

								'<section class="Hcreateframe">'+
									'<h2>Access File</h2>'+
								'</section>'+

								'<section class="Aframe">'+
									'<a href="#"><img id="man" src="images/mark.png"></a>'+
								'</section>'+

								'<section class="frame">'+
									'<a href="#"><img id="man" src="images/man.png"></a>'+
								'</section>'+
								
								'<div class="clear"></div>'+

								'<div id="access1Row">'+
									'<h4>File</h4>'+
									'<button class="popCreatebtm"><a href="#">Browse</a></button>'+
									'<button class="popCreatebtm"><a href="#">OK</a></button>'+
									'<select id="select">'+
										'<option value="exe">Type</option>'+
					  					'<option value="exe">dll</option>'+
					 					'<option value="read">doc</option>'+
					  					'<option value="write">exe</option>'+
									'</select>'+
									'<input class="create" type=text name=Fname placeholder="File Name">'+
								'</div>'+

								'<div id="access2Row">'+
									'<h4>Directory</h4>'+
									'<button class="popCreatebtm"><a href="#">Browse</a></button>'+
									'<button class="popCreatebtm"><a href="#">OK</a></button>'+
									'<input class="create" type=text name=Fname placeholder="File Name">'+
								'</div>'+

								'<div id="tCreateRow">'+
									'<a href="#"><img id="save" src="images/save.png"></a>'+
									'<a href="#"><img id="save" src="images/v.png"></a>'+
									'<a href="#"><img id="save2" src="images/undo.png"></a>'+
								'</div>'+

								'<div class="clear"></div>'+

								'<div id="permissions">'+

									'<div id="perBox">'+
										'<h6>References</h6>'+
										'<div class="clear"></div>'+
										'<section id="refSec">'+
											'<a href="#"><img id="plus2" src="images/2.png"></a>'+
											'<select id="select2">'+
												'<option value="exe">Owner</option>'+
					  							'<option value="exe">Group</option>'+
					 							'<option value="read">Other</option>'+
					  							'<option value="write">All</option>'+
											'</select>'+
										'</section>'+
									'</div>'+
										
									'<div id="perBox">'+
										'<h6>Operators</h6>'+
										'<div class="clear"></div>'+
										'<section id="refSec">'+
											'<a href="#"><img id="plus2" src="images/2.png"></a>'+
											'<select id="select2">'+
												'<option value="exe">+ Adds</option>'+
					  							'<option value="exe">- Remove</option>'+
											'</select>'+
										'</section>'+
									'</div>'+

									'<div id="perBox">'+
										'<h6>Permissions</h6>'+
										'<div class="clear"></div>'+
										'<section id="refSec">'+
											'<a href="#"><img id="plus2" src="images/2.png"></a>'+
											'<select id="select2">'+
												'<option value="exe">Read</option>'+
					  							'<option value="exe">Execute</option>'+
					 							'<option value="read">Sticky</option>'+
					  							'<option value="write">Write</option>'+
												'<option value="write">Special Exe</option>'+
											'</select>'+
										'</section>'+
									'</div>'+

								'</div>'+

								'<div id="viewSelection">'+
									'<h4>View Selection</h4>'+
									'<table>'+
					 				  '<tr>'+
					  				    '<th id="viewSec">Access File - Directory</th>'+
					  				    '<th id="viewSec1"><h3 class="tableRow">References</h3>'+
										'<input id="para2" type=text name=P1 placeholder="Refernce"></th>'+
					  				    '<th id="viewSec1"><h3 class="tableRow">Operator</h3>'+
										'<input id="para2" type=text name=P1 placeholder="Operand"></th>'+
					  				    '<th id="viewSec1"><h3 class="tableRow">Modes</h3>'+
										'<input id="para2" type=text name=P1 placeholder="Mode"></th>'+
					  				    '<th id="viewSec1"><h3 class="tableRow">File</h3>'+
										'<input id="para2" type=text name=P1 placeholder="File"></th>'+
					  				    '<th id="viewSec1"><input id="radio2" type="radio" name="list" value="list"> List<br>'+
										'<button class="popCreatebtm"><a href="#">OK</a></button></th>'+
					  				  '</tr>'+
									'</table>'+
								'</div>'+		
							'</div>'+
						'</div>'
			document.getElementById("fileDetails").innerHTML=Access ;	
		}

		function newPopupLS(str) {
			if(sizeWindow==0){
				resize();
			}
			if(str==null){
				str="";
			}
			var LS = '<div id="cp">'+

						'<div id="fCPRow">'+

							'<section class="Hcopyframe">'+
								'<h2>List</h2>'+
							'</section>'+

							'<section class="frame">'+
								'<a href="#"><img id="man" src="images/mark.png"></a>'+
							'</section>'+

							'<section class="frame">'+
								'<a href="#"><img id="man" src="images/man.png"></a>'+
							'</section>'+
			
							'<div class="clear"></div>'+

							'<div id="tCPRow">'+
								'<a href="#"><img id="save" src="images/save.png"></a>'+
								'<a href="JavaScript:inputLS();"><img id="save" src="images/v.png"></a>'+
								'<a href="#"><img id="save2" src="images/undo.png"></a>'+
							'</div>'+

							'<div id="parameters">'+
								'<h4>Parameters</h4>'+
								'<a href="JavaScript:openLSParameters();"><img id="plus" src="images/2.png"></a>'+
								'<input class="para" id="inputPara1" value="'+str+'" type=text name=P1 placeholder="Para 1">'+
							'</div>'+

							'<div id="removeRow">'+
								'<a href="JavaScript:enterBrowse(1);"><img id="vplus2" src="images/3.png"></a>'+
								'<div class="clear"></div>'+
								'<input type="file" class="inputCD" id="browser1"/>'+
								'<div class="clear"></div>'+
								'<input class="create2" id="Input1" type=text name=Fname placeholder="Destination Path" onkeydown = "if (event.keyCode == 13) inputCD()">'+
							'</div>'+


						'</div>'+
					'</div>'
			document.getElementById("fileDetails").innerHTML=LS ;	
		}

//------------------------------------------------------------//

//----------------Other Functions-----------------------------//

		function unloadScrollBars() {
    		document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    		//document.body.scroll = "no"; // ie only
		}

		function fileDetails(){
			var fds = '<h5>File Details</h5>'+
				'<a href="JavaScript:minimize();"><img id="minimize" src="images/minimize.png"></a>'+
				'<section id="fdS">'+
				'</section>'
			document.getElementById("fileDetails").innerHTML=fds ;	
		}

		function redTPopup(){
			check = document.getElementsByClassName("Tcheckbox");
			var i, TempCommandCounter;
			for (i = check.length-1; i>=0 ; i--) {
				if(check[i].checked){
					TempCommandCounter=i+1;
					document.getElementById("redT"+TempCommandCounter).style.display="block" ;
					TTempCommandCounter = TempCommandCounter+1;
					if(TTempCommandCounter<=check.length){
						document.getElementById("gBtn"+TTempCommandCounter).style.display="block" ;
					}
					break;

				}
			}

			if(TcommandCounter==1){

			}
			if(TcommandCounter>1){

			}
			if(sizeWindow==0){

			}
		}

		function redVPopup(){
			//param = document.getElementById("commandParameter");
			check = document.getElementsByClassName("Vcheckbox");
			var i, TempCommandCounter;
			for (i = check.length-1; i>=0 ; i--) {
				if(check[i].checked){
					TempCommandCounter=i+1;
					para = check[i].value.split(",");
					if(((para[0]=="Make_Dir")||(para[0]=="Create_File"))&&(para[2]!=undefined)){
						console.log(para[2]);
						document.getElementById("redV"+TempCommandCounter).className="red3";
					}
					if(para[3]!=null){
						document.getElementById("redV"+TempCommandCounter).className="red3";
					}
					document.getElementById("redV"+TempCommandCounter).style.display="block" ;
					VTempCommandCounter = TempCommandCounter+1;
					if(VTempCommandCounter<=check.length){
						document.getElementById("greenV"+VTempCommandCounter).style.display="block" ;
						document.getElementById("VuserName"+VTempCommandCounter).className="VSuserName";
					}
					break;
				}
			}

			if(VcommandCounter==1){

			}
			if(VcommandCounter>1){

			}
		}

//------------------------------------------------------------//

//------------------Undo Func---------------------------------//

		function undoVisualCommand(){
			if(VcommandCounter==1){
				var current = document.getElementById("firstCommandVCL");
				document.getElementById("firstCommandVCL").remove();
				VcommandCounter=0;
				fileCounter=0;
				folderCounter=0;
				var temp = '<section id="firstCommandVCL"></secion>'
				document.getElementById("vclS").innerHTML=temp;
			}
			if(VcommandCounter>1){					
				document.getElementById("firstCommandVCL"+VcommandCounter).remove();
				VcommandCounter--;
				Vcurrent = VcommandCounter-1;
				var temp = '<section id="firstCommandVCL"+Vcurrent></secion>'
				document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=temp;
			}
		}

		function undoTextCommand(){
			if(TcommandCounter==1){
				var current = document.getElementById("firstCommandTCL");
				document.getElementById("firstCommandTCL").remove();
				TcommandCounter=0;
				fileCounter=0;
				folderCounter=0;
				var temp = '<section id="firstCommandTCL"></secion>'
				document.getElementById("tclS").innerHTML=temp;
			}
			if(TcommandCounter>1){
				document.getElementById("firstCommandTCL"+TcommandCounter).remove();
				TcommandCounter--;
				Vcurrent = TcommandCounter-1;
				var temp = '<section id="firstCommandTCL"+Vcurrent></secion>'
				document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=temp;
			}
		}

//------------------------------------------------------------//

//-----------------Delete Func--------------------------------//

		function deleteVisualCommand(){
			if(VcommandCounter==1){  // case of first command
				var current = document.getElementById("firstCommandVCL");
				document.getElementById("firstCommandVCL").remove();
				VcommandCounter=0;
				fileCounter=0;
				folderCounter=0;
				var temp = '<section id="firstCommandVCL"></secion>'
				document.getElementById("vclS").innerHTML=temp;
			}
			if(VcommandCounter>1){	// case of rest command				
				document.getElementById("firstCommandVCL"+VcommandCounter).remove();
				VcommandCounter--;
				Vcurrent = VcommandCounter-1;
				var temp = '<section id="firstCommandVCL"+Vcurrent></secion>'
				document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=temp;
			}
		}

		function deleteTextCommand(){
			var check = document.getElementsByClassName("Tcheckbox");
			console.log("check.lengthhhhhhh: "+check.length);
			console.log("Numberssssssssssss: "+TcommandCounter);

			var i;

			for (i = 0; i < check.length; i++) {
				console.log("counter: "+i);

				if(check[i].checked){
					console.log("Delete Line:  "+i);

					// Case of First Command
					if(i==0){
						var tmp = document.getElementById("firstCommandTCL"+1);
						document.getElementById("firstCommandTCL").remove();

						var first = document.createElement("SECTION");
						first.id = "firstCommandTCL";
						document.getElementById("tclS").appendChild(first);

						if(tmp!=null){ 
							document.getElementById("firstCommandTCL").appendChild(tmp);
							//document.getElementById("firstCommandTCL").id = "firstCommandTCL"+1;
						}
					}

					// Case of Second Command
					if(i==1){
						var tmp = document.getElementById("firstCommandTCL"+(i+1));
						document.getElementById("firstCommandTCL"+i).remove();
						if(tmp!=null){  // check if last
							document.getElementById("firstCommandTCL").appendChild(tmp);
							document.getElementById("firstCommandTCL"+(i+1)).id = "firstCommandTCL"+i;
						}
					}

					// Case of Middle Commands
					if(i>1){
						var tmp = document.getElementById("firstCommandTCL"+(i+1));
						document.getElementById("firstCommandTCL"+i).remove();
						if(tmp!=null){
							document.getElementById("firstCommandTCL"+(i-1)).appendChild(tmp);
							document.getElementById("firstCommandTCL"+(i+1)).id = "firstCommandTCL"+i;
						}					
					}

					console.log("update: "+(i+1)+" too: "+i);

					tmpCounter = i+2;
					for(tmpCounter; tmpCounter<TcommandCounter; tmpCounter++){
						document.getElementById("firstCommandTCL"+tmpCounter).id = "firstCommandTCL"+(tmpCounter-1);
						document.getElementById("gBtn"+tmpCounter).id = "gBtn"+(tmpCounter-1);
						document.getElementById("redT"+tmpCounter).id = "redT"+(tmpCounter-1);
						console.log("update: "+tmpCounter+" too: "+(tmpCounter-1));
					}
					TcommandCounter--;
					console.log("TcommandCounter:  "+TcommandCounter);	
	
					//deleteTextCommand();		
					//return;
				}

			}
							console.log("finallllllllll: "+TcommandCounter);

							//deleteTextCommand();
		}

//------------------------------------------------------------//

//-------------Select \ Unselect All--------------------------//

	function TselectAll(){
		check = document.getElementsByClassName("Tcheckbox");
		var i;
		for (i = 0; i < check.length; i++) {
			check[i].checked = true;
		}
	}

	function TunselectAll(){
		check = document.getElementsByClassName("Tcheckbox");
		var i;
		for (i = 0; i < check.length; i++) {
			check[i].checked = false;
			console.log(check[i].checked);
		}
	}

	function VselectAll(){
		check = document.getElementsByClassName("Vcheckbox");
		var i;
		for (i = 0; i < check.length; i++) {
			check[i].checked = true;
		}
	}

	function VunselectAll(){
		check = document.getElementsByClassName("Vcheckbox");
		var i;
		for (i = 0; i < check.length; i++) {
			check[i].checked = false;
		}
	}

//------------------------------------------------------------//

//--------------------Reset-----------------------------------//

	function Vreset(){
		for(var i=VcommandCounter+1; i>0; --i){
			if(VcommandCounter>1){					
				document.getElementById("firstCommandVCL"+VcommandCounter).remove();
				VcommandCounter--;
				Vcurrent = VcommandCounter-1;
				var temp = '<section id="firstCommandVCL"+Vcurrent></secion>'
				document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=temp;
			}
			if(VcommandCounter==1){
				var current = document.getElementById("firstCommandVCL");
				document.getElementById("firstCommandVCL").remove();
				VcommandCounter=0;
				VmacroCount=0;
				fileCounter=0;
				folderCounter=0;
				var temp = '<section id="firstCommandVCL"></secion>'
				document.getElementById("vclS").innerHTML=temp;
			}
		}
	}

	function Treset(){
		console.log("mimimiimi");
		--TcommandCounter;
		console.log("original: "+TcommandCounter);
		for(var i=TcommandCounter+1; i>0; --i){
			if(TcommandCounter>1){
				document.getElementById("firstCommandTCL"+TcommandCounter).remove();
				TcommandCounter--;
				Vcurrent = TcommandCounter-1;
				var temp = '<section id="firstCommandTCL"+Vcurrent></secion>'
				document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=temp;
			}
			if(TcommandCounter==1){
				var current = document.getElementById("firstCommandTCL");
				document.getElementById("firstCommandTCL").remove();
				TcommandCounter=0;
				TmacroCount=0;
				fileCounter=0;
				folderCounter=0;
				var temp = '<section id="firstCommandTCL"></secion>'
				document.getElementById("tclS").innerHTML=temp;
			}
		}
	}

//------------------------------------------------------------//

//--------------Minimize + Resize-----------------------------//

		function minimize() {
			if(sizeWindow==0){
				resize();
				return;
			}
			if(sizeWindow==1){
				sizeWindow=0;
				document.getElementById("fileDetails").style.height="35px" ;

				document.getElementById("fdS").style.height="0px" ;

				document.getElementById("fileTree").style.height="35px" ;	

				document.getElementById("ftS").style.height="0px" ;

				document.getElementById("linuxmacros").style.height="35px" ;

				//document.getElementById("ls1btm").style.display="none" ;
				//document.getElementById("openFile").style.display="none";
				//document.getElementById("ls1btm2").style.display="none" ;
				//document.getElementById("inputFileNameToSaveAs").style.display="none" ;

				document.getElementById("textCommandLine").style.height="480px" ;

				document.getElementById("tclS").style.height="395px" ;

				document.getElementById("visualCommandLine").style.height="480px" ;

				document.getElementById("vclS").style.height="395px" ;
				if(TcommandCounter>0){
					document.getElementById("gBtn").className="greenS2";
					document.getElementById("g1Btn").className="greenS2";
					//document.getElementById("redE2").className="redE2";
					document.getElementById("openFile").style.display="none";
				}
			}
		}

		function resize() {
				sizeWindow=1;
				document.getElementById("fileDetails").style.height="190px" ;

				document.getElementById("fdS").style.height="150px" ;

				document.getElementById("fileTree").style.height="190px" ;
					
				document.getElementById("ftS").style.height="150px" ;

				document.getElementById("linuxmacros").style.height="190px" ;

				//document.getElementById("ls1btm").style.display="block" ;
				//document.getElementById("ls1btm2").style.display="block" ;

				document.getElementById("textCommandLine").style.height="300px" ;

				document.getElementById("tclS").style.height="210px" ;

				document.getElementById("visualCommandLine").style.height="300px" ;

				document.getElementById("vclS").style.height="210px" ;

				if(TcommandCounter>1){
					//document.getElementById("redE2").className="redE3";
					//document.getElementById("g1Btn").className="greenS3";
					//document.getElementsByClassName("greenS3").className="greenS3";
				}
		}

//------------------------------------------------------------//

//---------------Open Parameters------------------------------//

	function openRenameParameters(){
			var Rename = '<div id="cp">'+

				'<div id="fCPRow">'+

					'<section class="Hrenameframe">'+
						'<h2>Rename</h2>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="tCPRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="#"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+

					'<div id="parameters">'+
						'<h4 class="Hrename2">Parameters</h4>'+
						'<a href="JavaScript:enterParameters(newPopupRename);"><img id="RenamePlus" src="images/3.png"></a>'+
						'<form>'+
							  '<input type="radio" class="radioBTN" name="gender" value="-f"><h5 class="radio"> (-f) Force</h5><br>'+
							  '<input type="radio" class="radioBTN" name="gender" value="-n"><h5 class="radio"> (-n) Not overwrite</h5><br>'+
							  '<input type="radio" class="radioBTN" name="gender" value="-v"><h5 class="radio"> (-v) Verbose - explain</h5>'+
						'</form>'+
					'</div>'+

					'<div id="STRow">'+
						'<h4>Source</h4>'+
						'<a href="JavaScript:enterBrowse(1);"><img id="vplus" src="images/3.png"></a>'+
						'<input type="file" id="browser1"/>'+
						'<input class="browse" id="Input1" type=text name=Fname placeholder="Path">'+
					'</div>'+

					'<div id="STRow">'+
						'<h4 class="Hrename">New Name</h4>'+
						'<input class="browse" type=text name=newName placeholder="New Name">'+
						//'<button class="popCPbtm"><a href="#">OK</a></button>'+
					'</div>'+

				'</div>'+
			'</div>'

			document.getElementById("fileDetails").innerHTML=Rename ;	
	}

	function openCopyParameters(){
		var Parameter = '<div id="cp">'+

					'<div id="fCPRow">'+

						'<section class="Hparameterframe">'+
							'<h2>Parameters</h2>'+
						'</section>'+

						'<section class="frame">'+
							'<a href="#"><img id="man" src="images/mark.png"></a>'+
						'</section>'+

						'<section class="frame">'+
							'<a href="#"><img id="man" src="images/man.png"></a>'+
						'</section>'+
				
						'<div class="clear"></div>'+

						'<div id="tCPRow">'+
							'<a href="#"><img id="save" src="images/save.png"></a>'+
							'<a href="JavaScript:enterParameters(newPopupCP);"><img id="save" src="images/v.png"></a>'+
							'<a href="#"><img id="save2" src="images/undo.png"></a>'+
						'</div>'+

						'<div id="openParameters">'+
							'<form>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-a"><h5 class="radio"> (-a) All</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="--attributes-only"><h5 class="radio"> Attributtes-only</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-b"><h5 class="radio"> (-b) Backup</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="--copy-contents"><h5 class="radio"> Copy-contents</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-d"><h5 class="radio"> (-d) No-derefernce</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-f"><h5 class="radio"> (-f) Force</h5><br>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-n"><h5 class="radio"> (-n) Not overwrite</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-i"><h5 class="radio"> (-i) Interactive</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-H"><h5 class="radio"> (-H) Follow links</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-l"><h5 class="radio"> (-l) Links</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-L"><h5 class="radio"> (-L) Derefernce</h5><br>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-p"><h5 class="radio"> (-p) Preserve</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-R"><h5 class="radio"> (-R) Recursive</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-s"><h5 class="radio"> (-s) Symbolic-link</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-t"><h5 class="radio"> (-t) Target-directory</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-T"><h5 class="radio"> (-T) No-target</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-u"><h5 class="radio"> (-u) Update</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-v"><h5 class="radio"> (-v) Verbose - explain</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-z"><h5 class="radio"> (-z) Security default</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="--version"><h5 class="radio"> Version'+
							'</form>'+
						'</div>'+

					'</div>'+
				'</div>'
		document.getElementById("fileDetails").innerHTML=Parameter ;	
	}

	function openCreateParameters(){

		var Parameter = '<div id="cp">'+

				'<div id="fCPRow">'+

					'<section class="Hcreateframe">'+
						'<h2>Create File</h2>'+
					'</section>'+

					'<section class="Mframe">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="#"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="CreateParameters">'+
						'<h4 class="Hrename2">Parameters</h4>'+
						'<a href="JavaScript:enterParameters(newPopupCreate);"><img id="RenamePlus" src="images/3.png"></a>'+
						'<form>'+
						    '<input type="radio" class="radioBTN" name="gender" value="-a"><h5 class="radio"> (-a) All</h5>'+
					        '<input type="radio" class="radioBTN" name="gender" value="-b"><h5 class="radio"> (-b) Number-Nonblank</h5>'+
						    '<input type="radio" class="radioBTN" name="gender" value="-E"><h5 class="radio"> (-E) Show-Ends</h5>'+
						    '<input type="radio" class="radioBTN" name="gender" value="-n"><h5 class="radio"> (-n) Number-Output</h5>'+
						    '<input type="radio" class="radioBTN" name="gender" value="-s"><h5 class="radio"> (-s) squeeze-blank</h5><br>'+
						    '<input type="radio" class="radioBTN" name="gender" value="-T"><h5 class="radio"> (-T) Show-Tabs</h5>'+
						    '<input type="radio" class="radioBTN" name="gender" value="-v"><h5 class="radio"> (-v) Show-NonPrinting</h5>'+
						    '<input type="radio" class="radioBTN" name="gender" value="--version"><h5 class="radio"> Version'+
						'</form>'+
					'</div>'+

					'<div id="createRow">'+
						'<h4 class="Hcreate">New File</h4>'+
						//'<button class="popCreatebtm"><a href="#">Browse</a></button>'+
						//'<button class="popCreatebtm"><a href="JavaScript:inputCreate();">OK</a></button>'+
						'<input class="create" id="InputCreate" type="text" name="FileName" placeholder="File Name">'+
					'</div>'+

					'<div id="tCreateRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="JavaScript:inputCreate();"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+	
				'</div>'+
			'</div>'
		document.getElementById("fileDetails").innerHTML=Parameter ;	
	}

	function openMakeParameters (){
		var parameter = '<div id="cp">'+

				'<div id="fCPRow">'+

					'<section class="Hfolderframe">'+
						'<h2>Create Folder</h2>'+
					'</section>'+

					'<section class="Mframe">'+
						'<a href="#"><img id="man" src="images/mark.png"></a>'+
					'</section>'+

					'<section class="frame">'+
						'<a href="cd.html" target="popup"><img id="man" src="images/man.png"></a>'+
					'</section>'+
					
					'<div class="clear"></div>'+

					'<div id="parameters">'+
						'<h4 class="Hrename2">Parameters</h4>'+
						'<a href="JavaScript:enterParameters(newPopupMake);"><img id="RenamePlus" src="images/3.png"></a>'+
						'<form>'+
							  '<input type="radio" class="radioBTN" name="gender" value="-m"><h5 class="radio"> (-m) File Mode</h5><br>'+
							  '<input type="radio" class="radioBTN" name="gender" value="-p"><h5 class="radio"> (-p) Make Parent Dir</h5><br>'+
							  '<input type="radio" class="radioBTN" name="gender" value="-v"><h5 class="radio"> (-v) Verbose - explain</h5>'+
						'</form>'+
					'</div>'+	

					'<div id="createRow">'+
						'<h4 class="Hcreate">New Folder</h4>'+
						'<input class="create" id="InputMake" type=text name=Fname placeholder="Folder Name">'+
					'</div>'+

					'<div id="tCreateRow">'+
						'<a href="#"><img id="save" src="images/save.png"></a>'+
						'<a href="JavaScript:inputMake();"><img id="save" src="images/v.png"></a>'+
						'<a href="#"><img id="save2" src="images/undo.png"></a>'+
					'</div>'+
				'</div>'+
			'</div>'
		document.getElementById("fileDetails").innerHTML=parameter ;	

	}

	function openLSParameters(){
			var Parameter = '<div id="cp">'+

					'<div id="fCPRow">'+

						'<section class="Hparameterframe">'+
							'<h2>Parameters</h2>'+
						'</section>'+

						'<section class="frame">'+
							'<a href="#"><img id="man" src="images/mark.png"></a>'+
						'</section>'+

						'<section class="frame">'+
							'<a href="#"><img id="man" src="images/man.png"></a>'+
						'</section>'+
				
						'<div class="clear"></div>'+

						'<div id="tCPRow">'+
							'<a href="#"><img id="save" src="images/save.png"></a>'+
							'<a href="JavaScript:enterParameters(newPopupLS);"><img id="save" src="images/v.png"></a>'+
							'<a href="#"><img id="save2" src="images/undo.png"></a>'+
						'</div>'+

						'<div id="openParameters">'+
							'<form>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-a"><h5 class="radio"> (-a) All</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-B"><h5 class="radio"> (-B) Ignore-Backup</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-c"><h5 class="radio"> (-c) Sort By</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-d"><h5 class="radio"> (-d) Directory</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-f"><h5 class="radio"> (-f) Do not Sort</h5><br>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-G"><h5 class="radio"> (-G) Not Group</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-H"><h5 class="radio"> (-H) Follow links</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-i"><h5 class="radio"> (-i) Index File</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-l"><h5 class="radio"> (-l) Long Listing</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-L"><h5 class="radio"> (-L) Derefernce</h5><br>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-r"><h5 class="radio"> (-r) Reverse Order</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-R"><h5 class="radio"> (-R) List Recursively</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-s"><h5 class="radio"> (-s) File Size</h5>'+
								'<input type="radio" class="radioBTN" name="gender" value="-S"><h5 class="radio"> (-S) Sort by Size</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-t"><h5 class="radio"> (-t) Sort by Mod Time</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-U"><h5 class="radio"> (-U) Do not Sort</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-v"><h5 class="radio"> (-v) Natural Sort</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-X"><h5 class="radio"> (-X) Sort Alphabetic</h5>'+
							    '<input type="radio" class="radioBTN" name="gender" value="-1"><h5 class="radio"> (-1) File Per Line'+
							'</form>'+
						'</div>'+
					'</div>'+
				'</div>'
		document.getElementById("fileDetails").innerHTML=Parameter ;
	}

	function enterParameters(func){
		para = document.getElementsByClassName("radioBTN");
		var i;
		for(i=0; i<para.length; ++i){
			if(para[i].checked){
				func(para[i].value);
				return;
			}
		}
		func();
	}

	function enterBrowse(count){
		var string = document.getElementById("browser"+count);
		var str = string.value.split("");
		var num = str.length-12;
		var array=[num], j=0;
		for(i=12; i<str.length; ++i){
			array[j] = str[i];
			++j;
		}
		var newString = array.join("");
		console.log(newString);
		document.getElementById("Input"+count).value=newString;
	}

//------------------------------------------------------------//

//--------------Save to Text File-----------------------------//

	function saveTextAsFile(checkbox)
	{
		check = document.getElementsByClassName(checkbox);
		var i, j=0, text=[], textToWrite;
		for (i = 0; i < check.length; i++) {
			if(check[i].checked){
				var res = check[i].value.split(",");
				text[j] = res[0]+" "+res[1];

				if(res[2]!=null){    //case of command with 2 parameters
					text[j] = res[0]+" "+res[1]+" "+res[2];
				}

				if(res[3]!=null){    //case of command with 3 parameters
					text[j] = res[0]+" "+res[1]+" "+res[2]+" "+res[3];
				}

				j++;
			}
		}
		textToWrite = text.join("\r\n");

		var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
		var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
		console.log(fileNameToSaveAs);
		if (fileNameToSaveAs == ""){
			fileNameToSaveAs = Date();
		}

		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null)
		{
			// Chrome allows the link to be clicked
			// without actually adding it to the DOM.
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		}
		else
		{
			// Firefox requires the link to be added to the DOM
			// before it can be clicked.
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}

		downloadLink.click();
	}

	function destroyClickedElement(event)
	{
		document.body.removeChild(event.target);
	}

	function loadFileAsText()
	{
		var fileToLoad = document.getElementById("fileToLoad").files[0];

		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
		{
			var textFromFileLoaded = fileLoadedEvent.target.result;
			document.getElementById("inputTextToSave").value = textFromFileLoaded;
		};
		fileReader.readAsText(fileToLoad, "UTF-8");
	}

//------------------------------------------------------------//

//-------------Read from Text File----------------------------//

	  var openFile = function(event) {
	    var input = event.target;

	    var reader = new FileReader();
	    reader.onload = function(){
	      var text = reader.result;
	      console.log(reader.result.substring(0, 200));
	      var commands = (reader.result.substring(0, 200)).split("\r\n");

	      for(i=0; i<commands.length; ++i){
	      	newTextCommand(commands[i], 1);
	      }

			check = document.getElementsByClassName("Tcheckbox");
			var i;
			for (i = 0; i < check.length; i++) {

					var res = check[i].value.split(",");

					if(res[0]=="cp"){res[0]="Copy"};
					if(res[0]=="cd"){res[0]="Change_Dir"};
					if(res[0]=="mkdir"){res[0]="Make_Dir"};
					if(res[0]=="cat"){res[0]="Create_File"};
					if(res[0]=="mv"){res[0]="Move_Dir"};
					if(res[0]=="rename"){res[0]="Rename"};
					if(res[0]=="rm"){res[0]="Remove"};

					if(res[4]==null){str = res[0]+" "+res[1]+" "+res[2]+" "+res[3];}
					if(res[3]==null){str = res[0]+" "+res[1]+" "+res[2];}
					if(res[2]==null){str = res[0]+" "+res[1];}
					newVisualCommand(str, 1);
	      }
	    };
	    reader.readAsText(input.files[0]);
	  };

//------------------------------------------------------------//

//---------------Move Left + Right----------------------------//

		function moveLeft(){
			check = document.getElementsByClassName("Tcheckbox");
			var i;
			for (i = 0; i < check.length; i++) {
				if(check[i].checked){
					var res = check[i].value.split(",");

					if(res[0]=="cp"){res[0]="Copy"};
					if(res[0]=="cd"){res[0]="Change_Dir"};
					if(res[0]=="mkdir"){res[0]="Make_Dir"};
					if(res[0]=="cat"){res[0]="Create_File"};
					if(res[0]=="mv"){res[0]="Move_Dir"};
					if(res[0]=="rename"){res[0]="Rename"};
					if(res[0]=="rm"){res[0]="Remove"};

					if(res[4]==null){str = res[0]+" "+res[1]+" "+res[2]+" "+res[3];}
					if(res[3]==null){str = res[0]+" "+res[1]+" "+res[2];}
					if(res[2]==null){str = res[0]+" "+res[1];}
					newVisualCommand(str);
				}
			}
		}

		function moveRight(){
			check = document.getElementsByClassName("Vcheckbox");
			var i;
			for (i = 0; i < check.length; i++) {
				if(check[i].checked){
					var res = check[i].value.split(",");

					if(res[0]=="Copy"){res[0]="cp"};
					if(res[0]=="Change_Dir"){res[0]="cd"};
					if(res[0]=="Make_Dir"){res[0]="mkdir"};
					if(res[0]=="Create_File"){res[0]="cat"};
					if(res[0]=="Move_Dir"){res[0]="mv"};
					if(res[0]=="Rename"){res[0]="rename"};
					if(res[0]=="Remove"){res[0]="rm"};

					//tmp = res[1].split("");
    				if(res[1]){
    					res[1] = getTextualParam (res[1], res[0]);
    					//console.log(res[1]);
					}

					if(res[4]==null){str = res[0]+" "+res[1]+" "+res[2]+" "+res[3];}
					if(res[3]==null){str = res[0]+" "+res[1]+" "+res[2];}
					if(res[2]==null){str = res[0]+" "+res[1];}
					newTextCommand(str);
				}
			}
		}

//------------------------------------------------------------//

//---------------Enter New Command----------------------------//

		function inputVisual() { 
      	  Input = document.getElementById("InputVisual");
      	  newVisualCommand(Input.value);
    	}

    	function inputText() { 
      	  Input = document.getElementById("InputText");
      	  newTextCommand(Input.value);
    	}

    	function newTextCommand(str, macro){
    		if(str==""){
      	 	 	alert("Empty Command");
      	  		return;
      		}
      		if(macro){ 
      			TCommand = "TCommand2";
      		}
      		else{
      			TCommand = "TCommand";
      		}
    		var res = str.split(" ");
    		TcommandCounter++;

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

    		// Case of 1 Parameter Command
    	  	CommandClassName = "";
    		fileClassName = "";

    		if(res[0]=="cat"){
    			CommandClassName = "catTerminalCommand";
				fileClassName = "createTfile";
    		}

    		if(res[0]=="cd"){
    			CommandClassName = "cdTerminalCommand";
				fileClassName = "cdTfile";
    		}

    		if(res[0]=="mkdir"){
    			CommandClassName = "makeTerminalCommand";
				fileClassName = "makeTfile";
    		}

    		if(res[0]=="rm"){
    		  	CommandClassName = "removeTerminalCommand";
    			fileClassName = "removeTfile";
    		}

    		parameters = '<section class="'+CommandClassName+'"><h5 class="un">'+res[0]+'</h5></section>'+
				'<section class="'+fileClassName+'"><h5 class="un">'+res[1]+'</h5></section>'
    		value = ''+res[0]+','+res[1]+''

    		// Case of 2 Parameter Command (Copy / Rename)
			if(res[2]!=null){

				if(res[0]=="cp"){
					CommandClassName = "CPterminalCommand";
					fileClassName = "CPTfile2";
				}
				if(res[0]=="rename"){
					CommandClassName = "RenameTerminalCommand";
					fileClassName = "RenameTfile2";
				}

				parameters = '<section class="'+CommandClassName+'" id="'+CommandClassName+'"><h5 class="un">'+res[0]+'</h5></section>'+
					'<section class="'+fileClassName+'"><h5 class="un">'+res[1]+'</h5></section>'+
					'<section class="'+fileClassName+'"><h5 class="un">'+res[2]+'</h5></section>'
				value = ''+res[0]+','+res[1]+','+res[2]+''
			}

			// Case of 2 Parameter Command (Cat / Mkdir)
			if((res[2]!=null)&&(res[0]!="cp")&&(res[0]!="rename")){

				tmp = res[1].split("");
    			if(tmp[0]=="-"){

					if(res[0]=="mkdir"){
						CommandClassName = "makeTerminalCommand";
						fileClassName = "makeTfile2";
					}
					if(res[0]=="cat"){
						CommandClassName = "catTerminalCommand";
						fileClassName = "createTfile2";
					}

					parameters = '<section class="'+CommandClassName+'" id="'+CommandClassName+'"><h5 class="un">'+res[0]+'</h5></section>'+
						'<section class="CPParameters"><h5 class="cpH">'+res[1]+'</h5></section>'+
						'<section class="'+fileClassName+'"><h5 class="un">'+res[2]+'</h5></section>'
					value = ''+res[0]+','+res[1]+','+res[2]+''
				}
				else{
					res[1]= ''+res[1]+" "+res[2]+''
					parameters = '<section class="'+CommandClassName+'" id="'+CommandClassName+'"><h5 class="un">'+res[0]+'</h5></section>'+
						'<section class="'+fileClassName+'"><h5 class="un">'+res[1]+'</h5></section>'
					value = ''+res[0]+','+res[1]+''
				}
			}


			if(res[3]!=null){     // Copy / Rename - command with 3 parameter

				if(res[0]=="cp"){
					CommandClassName = "CPterminalCommand";
					fileClassName = "CPTfile";
				}
				if(res[0]=="rename"){
					CommandClassName = "RenameTerminalCommand";
					fileClassName = "RenameTfile";
				}

				parameters = '<section class="'+CommandClassName+'" id="'+CommandClassName+'"><h5 class="un">'+res[0]+'</h5></section>'+
					'<section class="CPParameters"><h5 class="cpH">'+res[1]+'</h5></section>'+
					'<section class="'+fileClassName+'"><h5 class="un">'+res[2]+'</h5></section>'+
					'<section class="'+fileClassName+'"><h5 class="un">'+res[3]+'</h5></section>'
				value = ''+res[0]+','+res[1]+','+res[2]+','+res[3]+''
			}

			// Generic Text Command
			command = ''+green+''+
				'<section id="'+TCommand+'">'+
					'<section class="TuserName"><h5 class="un">'+userMeta.username+'@'+userMeta.host+'$</h5></section>'+
					''+parameters+''+
					'<section id="checkboxS">'+
						'<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="'+value+'">'+							
						'<label for=""></label>'+
					'</section>'+
					'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
				'</section>'+
				'<section id="firstCommandTCL'+TcommandCounter+'">'+
				'</section>'

			document.getElementById("InputText").value="" ;

			if(TcommandCounter==1){  // Enter First Command

				if(!macro){ 		 // Case of Regular Command
					document.getElementById("firstCommandTCL").innerHTML=command ;
				}

				if(macro){ // Case of Macro Command
					TmacroCount++;
					var newString = getMacroName();

					var first = document.createElement("SECTION");
					first.id = "textScript";
					document.getElementById("firstCommandTCL").appendChild(first);

					// Macro Folder
					var script = ''+green+''+
					'<section id="'+TCommand+'">'+
						'<section class="TuserName"><h5 class="un">'+userMeta.username+'@'+userMeta.host+'$</h5></section>'+
						'<section class="makeTerminalCommand"><h5 class="un">Macro</h5></section>'+
						'<section class="makeTfile"><h5 class="un">'+newString+'</h5></section>'+
						'<a href="JavaScript:openTextScript(1);"><img id="textScriptPlus" src="images/plus.png"></a>'+
					'</section>'+
					'<section id="innerTextScript"></section>'+
					'<section id="firstTCommandScript">'+
					'</section>'

					document.getElementById("textScript").innerHTML=script;
					document.getElementById("firstTCommandScript").innerHTML=command;
					openTextScript(0);
					runOnceTextFunc=0;			
				}
			}

			/////////////////////////////////////////////////////////////  stoped hereee   ////////////

			if(TcommandCounter>1){  // Enter Others Commands
				TcommandCounter--;

				if(!macro){ // first command after macro
					var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=command ;
						tLastMacro = false;
						final = true;
					}
					else {
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=command ;
						if(final==true){ 
							final = false;
						};
					} 
				}

				if(macro){ 
					TmacroCount++;
					if(!runOnceTextFunc){
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=command;
					}
					if(runOnceTextFunc){
						var newString = getMacroName();
						var first = document.createElement("SECTION");
						first.id = "textScript";
						document.getElementById("firstCommandTCL").appendChild(first);

						// Macro Folder
						var script = ''+green+''+
						'<section id="'+TCommand+'">'+
							'<section class="TuserName"><h5 class="un">'+userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="makeTerminalCommand"><h5 class="un">Macro</h5></section>'+
							'<section class="makeTfile"><h5 class="un">'+newString+'</h5></section>'+
							'<a href="JavaScript:openTextScript(1);"><img id="textScriptPlus" src="images/plus.png"></a>'+
						'</section>'+
						'<section id="innerTextScript"></section>'+
						'<section id="firstTCommandScript">'+
						'</section>'

						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=script;
						document.getElementById("firstTCommandScript").innerHTML=command;
						runOnceTextFunc=0;
					}
					tLastMacro=true;
				}
				TcommandCounter++;
			}  
			if(TcommandCounter>1){  // Hide Green Buttom
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
			if(TcommandCounter>0){  // Hide Red Buttom
				document.getElementById("redT"+TcommandCounter).style.display="none" ;
			}	
			if(macro){
    			openTextScript(1);
    		}		
    	}

    	function newVisualCommand(str, macro){

    		// Case of Empty Command
    		if(str==""){
      	 	 	alert("Empty Command");
      	  		return;
      		}

    		var res = str.split(" ");
    		tmp = res[1].split("");
    		if(tmp[0]=="-"){
    			res[1] = getVisualParam (res[1], res[0]);
    			console.log(res[1]);
			}
			VcommandCounter++;
			

			// Case of First Command
    		if(VcommandCounter==1){
    			pipe = '<img class="greenS" src="images/greenStart.png">'
    			nestClass = "vclN";
    			greenBtm = ""
    			first = 'f'
    			paraSection = ""
    			value = ''+res[0]+','+res[1]+''
    			parameters = '<section class="Vfile" id="destFile'+VcommandCounter+'"><h5 class="Vun">'+res[1]+'</h5></section>'
    			if(macro){nestClass = "vclN3"}
    		}

    		// Case of Others Commands
    		if(VcommandCounter>1){  
    			pipe = '<img class="pipe" src="images/linkCommand2.png">'
    			nestClass = "vclN2";
    			greenBtm = '<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'
    			first = ""
    			paraSection = ""
    			value = ''+res[0]+','+res[1]+''
    			parameters = '<section class="Vfile" id="destFile'+VcommandCounter+'"><h5 class="Vun">'+res[1]+'</h5></section>'
    			if(macro){nestClass = "vclN4"}
    		}

    		// Case of 3 atr Commands (without parameter)
    		if(res[2]!=null){  
    			value = ''+res[0]+','+res[1]+','+res[2]+''
    			paraSection = ""
				if((res[0]!="Rename")&&(res[0]!="Copy")){
					parameters = ""
				}
				if(res[0]=="Rename"){
					parameters='<section class="V4file" id="Vpara1"><h5 class="Vun">'+res[1]+'</h5></section>'+
							'<section class="V5file" id="Vpara2"><h5 class="Vun">'+res[2]+'</h5></section>'
				}
				if(res[0]=="Copy"){
					parameters='<section class="V1file" id="Vpara1"><h5 class="Vun">'+res[1]+'</h5></section>'+
							'<section class="V2file" id="Vpara2"><h5 class="Vun">'+res[2]+'</h5></section>'
				}
			}

			// Case of 2 atr Commands (with parameter)
			if((res[2]!=null)&&((res[0]=="Create_File")||(res[0]=="Make_Dir"))){
				value = ''+res[0]+','+res[1]+','+res[2]+''
				paraSection = '<section class="V3file" id="commandParameter"><h5 class="cpH2">'+res[1]+'</h5></section>'
				if(res[0]=="Make_Dir"){
					parameters = '<section class="makeVfile" id="destFile'+VcommandCounter+'"><h5 class="Vun">'+res[2]+'</h5></section>'
				}
				if(res[0]=="Create_File"){
					parameters = '<section class="createVfile" id="destFile'+VcommandCounter+'"><h5 class="Vun">'+res[2]+'</h5></section>'
				}
			}

			// Case of 3 atr Commands (with parameter)
			if(res[3]!=null){ 
				value = ''+res[0]+','+res[1]+','+res[2]+','+res[3]+''
				paraSection = '<section class="V3file" id="commandParameter"><h5 class="cpH2">'+res[1]+'</h5></section>'
				if(res[0]=="Rename"){
					parameters='<section class="V4file" id="Vpara1"><h5 class="Vun">'+res[2]+'</h5></section>'+
							'<section class="V5file" id="Vpara2"><h5 class="Vun">'+res[3]+'</h5></section>'
				}
				if(res[0]=="Copy"){
					parameters='<section class="V1file" id="Vpara1"><h5 class="Vun">'+res[2]+'</h5></section>'+
							'<section class="V2file" id="Vpara2"><h5 class="Vun">'+res[3]+'</h5></section>'
				}
			}

			// Generic Visual Command
			var command =''+pipe+''+
				'<section class="'+nestClass+'">'+
					''+greenBtm+''+
					'<section class="'+first+'VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+userMeta.username+'@'+userMeta.host+'$</h5></section>'+
					'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
					'<section class="'+first+'vCommand">'+
						'<h5 class="unS">'+res[0]+'</h5>'+
						''+parameters+''+
					'</section>'+
					'<section id="checkboxF">'+
						'<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="'+value+'">'+
						'<label for=""></label>'+
					'</section>'+
					'<br>'+
					''+paraSection+''+
					'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
				'</section>'+
				'<section id="firstCommandVCL'+VcommandCounter+'">'+
				'</section>'

			if(VcommandCounter==1){  // Enter First Command

				if(!macro){ // Case of Regular Command
					document.getElementById("firstCommandVCL").innerHTML=command ;
				}
				
				if(macro){ // Case of Macro Command
					VmacroCount++;

					// Get Script File Name 
					name = document.getElementById("openFile").value;
				    str=name.split("");
					var newName = str.length-12;
					var array=[newName], j=0;
					for(i=12; i<str.length; ++i){
						array[j] = str[i];
						++j;
					}
					var newString = array.join("");
					console.log(newString);

					var first = document.createElement("SECTION");
					first.id = "visualScript";
					document.getElementById("firstCommandVCL").appendChild(first);

					// Macro Folder
					var script =''+pipe+''+
					'<section id="scriptFolder1" class="vclN3">'+
						''+greenBtm+''+
						'<section class="fVuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
						'<section class="Vcounter"><h5 class="un">M</h5></section>'+
						'<section class="fvCommand">'+
							'<h5 class="unS">Macro</h5>'+
							'<section class="Vfile" id="destFile'+VcommandCounter+'"><h5 class="Vun">'+newString+'</h5></section>'+
						'</section>'+

						'<a href="JavaScript:openVisualScript(1);"><img id="visualScriptPlus" src="images/plus.png"></a>'+
						'<br>'+
						'<img id="pipeMacro" src="images/linkCommandMacro.png">'+
					'</section>'+
					'<section id="innerVisualScript"></section>'+
					'<section id="firstVCommandScript">'+
					'</section>'

					document.getElementById("visualScript").innerHTML=script;
					document.getElementById("firstVCommandScript").innerHTML=command;
					openVisualScript(0);
					runOnceVisualFunc=0;			
				}
			}

			if(VcommandCounter>1){  // Enter Others Commands
				VcommandCounter--;

				if(!macro){ // first command after macro
					var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=command ;
						vLastMacro = false;
						final = true;
					}
					else {
						console.log("hii");
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=command ;
						if(final==true){ 
							final = false;
						};
					} 
				}

				if(macro){ 
					VmacroCount++;
					if(!runOnceVisualFunc){
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=command;
					}
					if(runOnceVisualFunc){
						var newString = getMacroName();

						var first = document.createElement("SECTION");
						first.id = "visualScript";
						document.getElementById("firstCommandVCL").appendChild(first);

						var script =''+pipe+''+
						'<section id="scriptFolder1" class="vclN4">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenEmpty.png">'+
							'<section class="fVuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">M</h5></section>'+
							'<section class="fvCommand">'+
								'<h5 class="unS">Macro</h5>'+
								'<section class="Vfile" id="destFile'+VcommandCounter+'"><h5 class="Vun">'+newString+'</h5></section>'+
							'</section>'+
							'<a href="JavaScript:openVisualScript(1);"><img id="visualScriptPlus" src="images/plus.png"></a>'+
							'<br>'+
						'</section>'+
						'<section id="innerVisualScript"></section>'+
						'<section id="firstVCommandScript">'+
						'</section>'

						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=script;
						document.getElementById("firstVCommandScript").innerHTML=command;
						runOnceVisualFunc=0;
					}
					vLastMacro=true;
				}
				VcommandCounter++;
			}

			document.getElementById("InputVisual").value="" ;

			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
			}
			if(VcommandCounter>0){
				document.getElementById("redV"+VcommandCounter).style.display="none" ;
			}

			if(res[0]=="Create_File"){
    			document.getElementById("destFile"+VcommandCounter).className="destFile";
    		}
    		if(res[0]=="Make_Dir"){
    			document.getElementById("destFile"+VcommandCounter).className="destFile2";
    		}
    		if(res[0]=="Change_Dir"){
    			document.getElementById("destFile"+VcommandCounter).className="cdVfile";
    		}
    		if(res[0]=="Remove"){
    			document.getElementById("destFile"+VcommandCounter).className="removeVfile";
    		}
    		if(macro){
    			openVisualScript(1);
    		}	
    	}


    	function openVisualScript(i){
    		console.log("open visual:"+visualMacroOpen);
    		visualMacroOpen = visualMacroOpen+i;
    		
    		if(visualMacroOpen==1){ // Case of Open Macro
    			var tmp = document.getElementById("scriptFolder1");
    			if(tmp){
    				document.getElementById("scriptFolder1").className="vclN3";
    			}
    			tmp = document.getElementById("scriptFolder");
    			if(tmp){
    				document.getElementById("scriptFolder").className="vclN4";
    			}
    			visualMacroOpen--;
    			document.getElementById("firstVCommandScript").style.display="block";
    			temp = document.getElementById("pipeMacro");
    			if(temp){
					document.getElementById("pipeMacro").style.display="block";
    			}
    			var tmp = document.getElementById("innerVisualScript");
    			var node = document.getElementById("visualScript");

    			if(tmp){
    				node.appendChild(tmp);
    			}
    			visualMacroOpen--; //-1
    			openVMacro=1;
    		}

    		if(visualMacroOpen==0){ // Case of Close Macro
    			var tmp = document.getElementById("scriptFolder1");
    			if(tmp){
    				document.getElementById("scriptFolder1").className="vclN6";
    			}
    			tmp = document.getElementById("scriptFolder");
    			if(tmp){
    				document.getElementById("scriptFolder").className="vclN5";
    			}
    			document.getElementById("firstVCommandScript").style.display="none";
    			temp = document.getElementById("pipeMacro");
    			if(temp){
    				document.getElementById("pipeMacro").style.display="none";
    			}
    			openVMacro=0;
    		}
    	}


    	function openTextScript(i){
    		console.log("open text:"+textMacroOpen);
    		textMacroOpen = textMacroOpen+i;
    		
    		if(textMacroOpen==1){ // Case of Open Macro
    			textMacroOpen--;
    			document.getElementById("firstTCommandScript").style.display="block";

    			var tmp = document.getElementById("innerTextScript");
    			var node = document.getElementById("textScript");

    			/// problem with command and then macro
    			if(tmp){
    				node.appendChild(tmp);
    			}
    			textMacroOpen--; //-1
    			openTMacro=1;
    		}

    		if(textMacroOpen==0){ // Case of Close Macro
       			document.getElementById("firstTCommandScript").style.display="none";
    			openTMacro=0;
    		}
    	}

//------------------------------------------------------------//

//--------------------Get Macro Name--------------------------//

	function getMacroName(){
		name = document.getElementById("openFile").value;
		str=name.split("");
		var newName = str.length-12;
		var array=[newName], j=0;
			for(i=12; i<str.length; ++i){
				array[j] = str[i];
				++j;
			}
		var newString = array.join("");
		return newString;
	}

//------------------------------------------------------------//

//-------------Get Full Parameter Name------------------------//

	function getVisualParam (textParameter, command){
		console.log(textParameter, command);
		if((command=="Copy")||(command=="cp")){
			if(textParameter=="-a"){return visualParameter="All"}
			if(textParameter=="-b"){return visualParameter="Backup"}
			if(textParameter=="-d"){return visualParameter="No-derefernce"}
			if(textParameter=="-f"){return visualParameter="Force"}
			if(textParameter=="-n"){return visualParameter="Not overwrite"}
			if(textParameter=="-i"){return visualParameter="Interactive"}
			if(textParameter=="-H"){return visualParameter="Follow Links"}
			if(textParameter=="-l"){return visualParameter="Links"}
			if(textParameter=="-L"){return visualParameter="Derefernce"}
			if(textParameter=="-p"){return visualParameter="Preserve"}
			if(textParameter=="-R"){return visualParameter="Recursive"}
			if(textParameter=="-s"){return visualParameter="Symbolic-link"}
			if(textParameter=="-t"){return visualParameter="Target-directory"}
			if(textParameter=="-T"){return visualParameter="No Target"}
			if(textParameter=="-u"){return visualParameter="Update"}
			if(textParameter=="-v"){return visualParameter="Verbose - Explain"}
			if(textParameter=="-z"){return visualParameter="Security"}
		}
		if((command=="Rename")||(command=="rename")){
			if(textParameter=="-f"){return visualParameter="Force"}
			if(textParameter=="-n"){return visualParameter="Not overwrite"}
			if(textParameter=="-v"){return visualParameter="Verbose - Explain"}
		}
		if((command=="Create_File")||(command=="cat")){
			if(textParameter=="-A"){return visualParameter="All"}
			if(textParameter=="-b"){return visualParameter="Number-Nonblank"}
			if(textParameter=="-E"){return visualParameter="Show-Ends"}
			if(textParameter=="-n"){return visualParameter="Number-Output"}
			if(textParameter=="-s"){return visualParameter="squeeze-blank"}
			if(textParameter=="-T"){return visualParameter="Show-Tabs"}
			if(textParameter=="-v"){return visualParameter="Show-NonPrinting"}
		}
		if((command=="Make_Dir")||(command=="mkdir")){
			if(textParameter=="-m"){return visualParameter="File Mode"}
			if(textParameter=="-p"){return visualParameter="Make Parent Dir"}
			if(textParameter=="-v"){return visualParameter="Verbose - Explain"}
		}
		return textParameter;
	}

	function getTextualParam (visualParameter, command){
		console.log(visualParameter, command);
		if((command=="Copy")||(command=="cp")){
			if(visualParameter=="All"){return textParameter="-a"}
			if(visualParameter=="Backup"){return textParameter="-b"}
			if(visualParameter=="No-derefernce"){return textParameter="-d"}
			if(visualParameter=="Force"){return textParameter="-f"}
			if(visualParameter=="Not overwrite"){return textParameter="-n"}
			if(visualParameter=="Interactive"){return textParameter="-i"}
			if(visualParameter=="Follow Links"){return textParameter="-H"}
			if(visualParameter=="Links"){return textParameter="-l"}
			if(visualParameter=="Derefernce"){return textParameter="-L"}
			if(visualParameter=="Preserve"){return textParameter="-p"}
			if(visualParameter=="Recursive"){return textParameter="-R"}
			if(visualParameter=="Symbolic-link"){return textParameter="-s"}
			if(visualParameter=="Target-directory"){return textParameter="-t"}
			if(visualParameter=="No Target"){return textParameter="-T"}
			if(visualParameter=="Update"){return textParameter="-u"}
			if(visualParameter=="Verbose - Explain"){return textParameter="-v"}
			if(visualParameter=="Security"){return textParameter="-z"}
		}
		if((command=="Rename")||(command=="rename")){
			if(visualParameter=="Force"){return textParameter="-f"}
			if(visualParameter=="Not overwrite"){return textParameter="-n"}
			if(visualParameter=="Verbose - Explain"){return textParameter="-v"}
		}
		if((command=="Create_File")||(command=="cat")){
			if(visualParameter=="All"){return textParameter="-A"}
			if(visualParameter=="Number-Nonblank"){return textParameter="-b"}
			if(visualParameter=="Show-Ends"){return textParameter="-E"}
			if(visualParameter=="Number-Output"){return textParameter="-n"}
			if(visualParameter=="squeeze-blank"){return textParameter="-s"}
			if(visualParameter=="Show-Tabs"){return textParameter="-T"}
			if(visualParameter=="Show-NonPrinting"){return textParameter="-v"}
		}
		if((command=="Make_Dir")||(command=="mkdir")){
			if(visualParameter=="File Mode"){return textParameter="-m"}
			if(visualParameter=="Make Parent Dir"){return textParameter="-p"}
			if(visualParameter=="Verbose - Explain"){return textParameter="-v"}
		}
		return visualParameter;
	}

//------------------------------------------------------------//

//-----------Change Text Command to Visual--------------------//
	
	function textToVisual(command){
		if(command=="cp"){return command="Copy"};
		if(command=="cd"){return command="Change_Dir"};
		if(command=="mkdir"){return command="Make_Dir"};
		if(command=="cat"){return command="Create_File"};
		if(command=="mv"){return command="Move_Dir"};
		if(command=="rename"){return command="Rename"};
		if(command=="rm"){return command="Remove"};
	}

//------------------------------------------------------------//

//-----------------Create Command-----------------------------//

    	function inputCreate(){
    		var finalCommand;
    		Input = document.getElementById("InputCreate");
    		InputP = document.getElementById("inputPara1");
    		if(Input.value==""){alert("Please Fill Command"); return;}
    		newCreateCommand(Input.value, InputP.value);
    		// if(InputP.value){
    		// 	finalCommand = currentTCommand+" "+InputP.value+" "+Input.value;
    		// }
    		// else {
    		// 	finalCommand = currentTCommand+" "+Input.value;
    		// }
    		// console.log(finalCommand);
    		// newTextCommand(finalCommand);

    		// currentVCommand=textToVisual(currentTCommand);
    		// if(InputP.value){
    		// 	finalCommand = currentVCommand+" "+InputP.value+" "+Input.value;
    		// }
    		// else{
    		// 	finalCommand = currentVCommand+" "+Input.value;
    		// }
    		// console.log(finalCommand);
    		// newVisualCommand(finalCommand);
    		// fileDetails();	
    	}

    	function newCreateCommand(str,parameter) { 
    		if(str==""){
    			alert("Please fill New File Name");
    			return;
    		}

    		if(parameter==""){
				TCpParameters = "";
				VCpParameters = "";
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="cat,'+str+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Create_File,'+str+'">'
				cell = '<section class="createTfile"><h5 class="un">'+str+'</h5></section>'
			}
			else{
				tmp = parameter;
				parameter = getVisualParam (parameter, "cat");
				TCpParameters = '<section class="CPParameters"><h5 class="cpH">'+tmp+'</h5></section>'
				VCpParameters = '<section class="V3file"><h5 class="cpH2">'+parameter+'</h5></section>'
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="cat,'+parameter+','+str+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Create_File,'+parameter+','+str+'">'
				cell = '<section class="createTfile2"><h5 class="un">'+str+'</h5></section>'
			}

			VcommandCounter++;
			TcommandCounter++;
			fileCounter++; 
			var File = '<section class="pathFolder">'+
								'<img id="secondFile" src="images/path1.png">'+
								'<h4 class="sub">'+str+'</h4>'+
								'<img id="imgSubFile" src="images/file.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstC ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCommand">'+
								'<h5 class="unS">Create_File</h5>'+
								'<section class="createVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondC ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
						'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCommand">'+
								'<h5 class="unS">Create_File</h5>'+
								'<section class="createVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'
    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			//document.getElementById("g1Btn").className="greenS3";////////////////s
    		};

			var cat = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="catTerminalCommand"><h5 class="un">cat</h5></section>'+
							''+TCpParameters+''+
							''+cell+''+
							'<section id="checkboxS">'+
								''+Tinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'+					
						'<div class="clear"></div>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=cat ;
			}

			if(VcommandCounter==1){				
				document.getElementById("firstCommandVCL").innerHTML=firstC ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=File ;	
				document.getElementById("newFile").innerHTML=File ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=cat ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=cat ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=File ;
				document.getElementById("newFile").innerHTML=File ;	
				fileDetails();	
			}

			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondC ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondC ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondC ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//

//------------------Make Command------------------------------//

		function inputMake(){
    		Input = document.getElementById("InputMake");
    		InputP = document.getElementById("inputPara1");
    		if(Input.value==""){alert("Please Fill Command"); return;}
    		newMakeCommand(Input.value, InputP.value);
    		Vcommand = "Make_Dir "+InputP.value+" "+Input.value;
    		Tcommand = "mkdir "+InputP.value+" "+Input.value;
    		if(InputP.value==""){
    			Vcommand = "Make_Dir "+Input.value;
    			Tcommand = "mkdir "+Input.value;
    		}
    	}

		function newMakeCommand(str,parameter) {
			if(str==""){
				alert("Please fill New Folder Name");
				return;
			}

			if(parameter==""){
				TCpParameters = "";
				VCpParameters = "";
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="mkdir,'+str+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Make_Dir,'+str+'">'
				cell = '<section class="makeTfile"><h5 class="un">'+str+'</h5></section>'
			}
			else{
				tmp = parameter;
				parameter = getVisualParam (parameter, "mkdir");
				TCpParameters = '<section class="CPParameters"><h5 class="cpH">'+tmp+'</h5></section>'
				VCpParameters = '<section class="V3file"><h5 class="cpH2">'+parameter+'</h5></section>'
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="mkdir,'+parameter+','+str+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Make_Dir,'+parameter+','+str+'">'
				cell = '<section class="makeTfile2"><h5 class="un">'+str+'</h5></section>'
			}

			TcommandCounter++;
			VcommandCounter++;
			folderCounter++;
			var Folder = '<section class="pathFolder">'+
								'<img id="secondFolder" src="images/path6.png">'+
								'<h4 class="sub">'+str+'</h4>'+
								'<img id="imgSubFolder" src="images/folder.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstC ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCommand">'+
								'<h5 class="unS">Make_Dir</h5>'+
								'<section class="makeVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondC ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCommand">'+
								'<h5 class="unS">Make_Dir</h5>'+
								'<section class="makeVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

			var mkdir = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="makeTerminalCommand"><h5 class="un">mkdir</h5></section>'+
							''+TCpParameters+''+
							''+cell+''+
							'<section id="checkboxS">'+
								''+Tinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=mkdir ;
			}
			if(VcommandCounter==1){						
				document.getElementById("firstCommandVCL").innerHTML=firstC ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=mkdir ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=mkdir ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();		
			}
			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondC ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondC ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondC ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//

//------------------CD Command--------------------------------//

		function inputCD(){
			Input = document.getElementById("Input1");
			if(Input.value==""){alert("Please fill Destination Path"); return;}
			Vcommand = "Change_Dir "+Input.value;
    		Tcommand = "cd "+Input.value;
    		console.log(Vcommand);
    		console.log(Tcommand);
    		//newVisualCommand(Vcommand);
    		//newTextCommand(Tcommand);
    		newCDCommand(Input.value);
		}

		function newCDCommand (str){
			if(str==""){
				alert("Please fill Destination Path");
				return;
			}

			VcommandCounter++;
			TcommandCounter++;
			folderCounter++;
			var Folder = '<section class="pathFolder">'+
								'<img id="secondFolder" src="images/path6.png">'+
								'<h4 class="sub">'+str+'</h4>'+
								'<img id="imgSubFolder" src="images/folder.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstD ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCommand">'+
								'<h5 class="unS">Change_Dir</h5>'+
								'<section class="cdVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								'<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Change_Dir,'+str+'">'+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondD ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCommand">'+
								'<h5 class="unS">Change_Dir</h5>'+
								'<section class="cdVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								'<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Change_Dir,'+str+'">'+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

			var chdir = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="cdTerminalCommand"><h5 class="un">cd</h5></section>'+
							'<section class="cdTfile"><h5 class="un">'+str+'</h5></section>'+
							'<section id="checkboxS">'+
								'<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="cd,'+str+'">'+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=chdir ;	
			}
			if(VcommandCounter==1){					
				document.getElementById("firstCommandVCL").innerHTML=firstD ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=chdir ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=chdir ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();	
			}
			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondC ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondC ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//

//-----------------Rename Command-----------------------------//

		function inputRename(){
			Input = document.getElementById("Input1");
			if(Input.value==""){
				alert("Please fill Source Copy");
				return;
			}
			InputT = document.getElementById("InputName");
			if(InputT.value==""){
				alert("Please fill New Name");
				return;
			}
			InputP = document.getElementById("inputPara1");
    		newRenameCommand(Input.value,InputT.value,InputP.value);
		}

		function newRenameCommand (str1,str2,parameter){
			if(parameter==""){
				TCpParameters = "";
				VCpParameters = "";
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="rename,'+str1+','+str2+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Rename,'+str1+','+str2+'">'
				cells = '<section class="RenameTfile2" id="RenameTfile"><h5 class="un">'+str1+'</h5></section>'+
				'<section class="RenameTfile2" id="RenameTfile"><h5 class="un">'+str2+'</h5></section>'
			}
			else{
				tmp = parameter;
				parameter = getVisualParam (parameter, "rename");
				TCpParameters = '<section class="CPParameters"><h5 class="cpH">'+tmp+'</h5></section>'
				VCpParameters = '<section class="V3file"><h5 class="cpH2">'+parameter+'</h5></section>'
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="rename,'+parameter+','+str1+','+str2+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Rename,'+parameter+','+str1+','+str2+'">'
				cells = '<section class="RenameTfile" id="RenameTfile"><h5 class="un">'+str1+'</h5></section>'+
				'<section class="RenameTfile" id="RenameTfile"><h5 class="un">'+str2+'</h5></section>'
			}

			VcommandCounter++;
			TcommandCounter++;
			folderCounter++;
			var Folder = '<section class="pathFolder">'+
								'<img id="secondFolder" src="images/path6.png">'+
								'<h4 class="sub">'+str1+'</h4>'+
								'<img id="imgSubFolder" src="images/folder.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstD ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCommand">'+
								'<h5 class="unS">Rename</h5>'+
								'<section class="V1RenameFile" id="Vpara1"><h5 class="Vun">'+str1+'</h5></section>'+
								'<section class="V2RenameFile" id="Vpara2"><h5 class="Vun">'+str2+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondD ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCommand">'+
								'<h5 class="unS">Rename</h5>'+
								'<section class="V1RenameFile" id="Vpara1"><h5 class="Vun">'+str1+'</h5></section>'+
								'<section class="V2RenameFile" id="Vpara2"><h5 class="Vun">'+str2+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

			var rename = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="RenameTerminalCommand"><h5 class="un">rename</h5></section>'+
							''+TCpParameters+''+
							''+cells+''+
							'<section id="checkboxS">'+
								''+Tinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=rename ;	
			}
			if(VcommandCounter==1){					
				document.getElementById("firstCommandVCL").innerHTML=firstD ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=rename ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=rename ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();		
			}
			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondD ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//

//-----------------Remove Command---****----------------------//

		function inputRemove(){
			Input = document.getElementById("Input1");
    		newRemoveCommand(Input.value);
		}

		function newRemoveCommand (str){
			if(str==""){
				alert("Please fill Removal File");
				return;
			}

			VcommandCounter++;
			TcommandCounter++;
			folderCounter++;
			var Folder = '<section class="pathFolder">'+
								'<img id="secondFolder" src="images/path6.png">'+
								'<h4 class="sub">'+str+'</h4>'+
								'<img id="imgSubFolder" src="images/folder.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstD ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCommand">'+
								'<h5 class="unS">Remove</h5>'+
								'<section class="removeVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								'<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Remove,'+str+'">'+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondD ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCommand">'+
								'<h5 class="unS">Remove</h5>'+
								'<section class="removeVfile"><h5 class="Vun">'+str+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								'<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Remove,'+str+'">'+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

			var remove = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="removeTerminalCommand"><h5 class="un">rm</h5></section>'+
							'<section class="removeTfile"><h5 class="un">'+str+'</h5></section>'+
							'<section id="checkboxS">'+
								'<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="rm,'+str+'">'+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=remove ;	
			}
			if(VcommandCounter==1){					
				document.getElementById("firstCommandVCL").innerHTML=firstD ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=remove ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=remove ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					}
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();		
			}
			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondD ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					} 
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//

//------------------Copy Command------------------------------//

		function inputCopy(){

			Input = document.getElementById("Input1");
			if(Input.value==""){
				alert("Please fill Source Copy");
				return;
			}
			InputT = document.getElementById("Input2");
			if(InputT.value==""){
				alert("Please fill Target Copy");
				return;
			}
			InputP = document.getElementById("inputPara1");
    		newCPCommand(Input.value,InputT.value,InputP.value);
		}

		function newCPCommand (str1,str2,parameter){

			VcommandCounter++;
			TcommandCounter++;
			folderCounter++;

			if(parameter==""){
				TCpParameters = "";
				VCpParameters = "";
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="cp,'+str1+','+str2+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Copy,'+str1+','+str2+'">'
				cells = '<section class="CPTfile2" id="CPTfile"><h5 class="un">'+str1+'</h5></section>'+
				'<section class="CPTfile2" id="CPTfile"><h5 class="un">'+str2+'</h5></section>'
			}
			else{
				tmp = parameter;
				parameter = getVisualParam (parameter, "cp");
				TCpParameters = '<section class="CPParameters"><h5 class="cpH">'+tmp+'</h5></section>'
				VCpParameters = '<section class="V3file" id="commandParameter"><h5 class="cpH2">'+parameter+'</h5></section>'
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="cp,'+parameter+','+str1+','+str2+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="Copy,'+parameter+','+str1+','+str2+'">'
				cells = '<section class="CPTfile" id="CPTfile"><h5 class="un">'+str1+'</h5></section>'+
				'<section class="CPTfile" id="CPTfile"><h5 class="un">'+str2+'</h5></section>'				
			}

			var Folder = '<section class="pathFolder">'+
								'<img id="secondFolder" src="images/path6.png">'+
								'<h4 class="sub">'+str1+'</h4>'+
								'<img id="imgSubFolder" src="images/folder.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstD ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCpCommand">'+
								'<h5 class="unS">Copy</h5>'+
								'<section class="V1file" id="Vpara1"><h5 class="Vun">'+str1+'</h5></section>'+
								'<section class="V2file" id="Vpara2"><h5 class="Vun">'+str2+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondD ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCpCommand">'+
								'<h5 class="unS">Copy</h5>'+
								'<section class="V1file" id="Vpara1"><h5 class="Vun">'+str1+'</h5></section>'+
								'<section class="V2file" id="Vpara2"><h5 class="Vun">'+str2+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

			var copy = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="CPterminalCommand"><h5 class="un">cp</h5></section>'+
							''+TCpParameters+''+
							''+cells+''+
							'<section id="checkboxS">'+
								''+Tinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=copy ;	
			}
			if(VcommandCounter==1){					
				document.getElementById("firstCommandVCL").innerHTML=firstD ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=copy ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=copy ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					}
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();		
			}
			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondD ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					}
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//

//-------------------LS Command-------------------------------//

		function inputLS(){

			Input = document.getElementById("Input1");
			if(Input.value==""){
				alert("Please fill Source Copy");
				return;
			}
			InputP = document.getElementById("inputPara1");
    		newLSCommand(Input.value, InputP.value);
		}

		function newLSCommand (str1, parameter){

			VcommandCounter++;
			TcommandCounter++;
			folderCounter++;

			if(parameter==""){
				TCpParameters = "";
				VCpParameters = "";
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="ls,'+str1+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="List,'+str1+'">'
				cells = '<section class="CPTfile2" id="CPTfile"><h5 class="un">'+str1+'</h5></section>'
			}
			else{
				tmp = parameter;
				parameter = getVisualParam (parameter, "cp");
				TCpParameters = '<section class="CPParameters"><h5 class="cpH">'+tmp+'</h5></section>'
				VCpParameters = '<section class="V3file" id="commandParameter"><h5 class="cpH2">'+parameter+'</h5></section>'
				Tinput = '<input type="checkbox" id="Tcheck" class="Tcheckbox" v-model="checked" value="ls,'+parameter+','+str1+'">'
				Vinput = '<input type="checkbox" id="Vcheck" class="Vcheckbox" v-model="checked" value="List,'+parameter+','+str1+'">'
				cells = '<section class="CPTfile" id="CPTfile"><h5 class="un">'+str1+'</h5></section>'			
			}

			var Folder = '<section class="pathFolder">'+
								'<img id="secondFolder" src="images/path6.png">'+
								'<h4 class="sub">'+str1+'</h4>'+
								'<img id="imgSubFolder" src="images/folder.png">'+
						'</section>'

			var treeFolder = '<img id="pathArrow" src="images/pathArrow.png">'

			var firstD ='<img class="greenS" src="images/greenStart.png">'+
						'<section class="vclN">'+
							'<section class="fVuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="fvCpCommand">'+
								'<h5 class="unS">Copy</h5>'+
								'<section class="V1file" id="Vpara1"><h5 class="Vun">'+str1+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

			var secondD ='<img class="pipe" src="images/linkCommand2.png">'+
						'<section class="vclN2">'+
							'<img class="greenSS" id="greenV'+VcommandCounter+'" src="images/greenStart.png">'+
							'<section class="VuserName" id="VuserName'+VcommandCounter+'"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="Vcounter"><h5 class="un">0'+VcommandCounter+'</h5></section>'+
							'<section class="vCpCommand">'+
								'<h5 class="unS">Copy</h5>'+
								'<section class="V1file" id="Vpara1"><h5 class="Vun">'+str1+'</h5></section>'+
							'</section>'+
							'<section id="checkboxF">'+
								''+Vinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<br>'+
							''+VCpParameters+''+
							'<img class="red2" id="redV'+VcommandCounter+'" src="images/redEnd.png">'+
						'</section>'+
						'<section id="firstCommandVCL'+VcommandCounter+'">'+
						'</section>'

    		var green = '<img class="greenS2" id="g1Btn" src="images/greenStart2.png">'

    		if(TcommandCounter>1){
    			green = '<img class="greenS2" id="gBtn'+TcommandCounter+'" src="images/greenStart2.png">';
    			document.getElementById("g1Btn").className="greenS2";
    		};

			var copy = ''+green+''+
						'<section id="TCommand">'+
							'<section class="TuserName"><h5 class="un">'+ userMeta.username+'@'+userMeta.host+'$</h5></section>'+
							'<section class="CPterminalCommand"><h5 class="un">cp</h5></section>'+
							''+TCpParameters+''+
							''+cells+''+
							'<section id="checkboxS">'+
								''+Tinput+''+
								'<label for=""></label>'+
							'</section>'+
							'<img class="red" id="redT'+TcommandCounter+'" src="images/redEnd2.png">'+
						'</section>'+
						'<section id="firstCommandTCL'+TcommandCounter+'">'+
						'</section>'

			if(TcommandCounter==1){
				document.getElementById("firstCommandTCL").innerHTML=copy ;	
			}
			if(VcommandCounter==1){					
				document.getElementById("firstCommandVCL").innerHTML=firstD ;	
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();
			}

			if(TcommandCounter>1){
				var final;
					if((TmacroCount>0)&&(tLastMacro==true)){
						document.getElementById("innerTextScript").innerHTML=copy ;
						tLastMacro = false;
						final = true;
					}
					else {
						TcommandCounter--;
						document.getElementById("firstCommandTCL"+TcommandCounter).innerHTML=copy ;
						TcommandCounter++;
						if(final==true){ 
							final = false;
						};
					}
				document.getElementById("treeArrow").innerHTML=treeFolder ;	
				document.getElementById("treeSubFolder").innerHTML=Folder ;
				document.getElementById("newFile").innerHTML=Folder ;	
				fileDetails();		
			}
			if(VcommandCounter>1){
				var final;
					if((VmacroCount>0)&&(vLastMacro==true)){
						document.getElementById("innerVisualScript").innerHTML=secondD ;
						vLastMacro = false;
						final = true;
					}
					else {
						VcommandCounter--;
						document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
						VcommandCounter++;
						if(final==true){ 
							final = false;
						};
					}
				// VcommandCounter--;
				// document.getElementById("firstCommandVCL"+VcommandCounter).innerHTML=secondD ;
				// VcommandCounter++;
			}
			document.getElementById("redT"+TcommandCounter).style.display="none" ;
			document.getElementById("redV"+VcommandCounter).style.display="none" ;
			if(VcommandCounter>1){
				document.getElementById("greenV"+VcommandCounter).style.display="none" ;
				document.getElementById("gBtn"+TcommandCounter).style.display="none" ;
			}
		}

//------------------------------------------------------------//
