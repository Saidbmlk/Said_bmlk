var WANTED, ACTUAL, TUSER;

function FADJ() {
  var BWIDTH;

  BWIDTH = $("body").width();

  if (BWIDTH > 575.98) {
    var TBOT, TTOP;
    TTOP = $(".RECENTROBLOX").outerHeight();
    TBOT = $(".rob-bot").height();
    TTB = TBOT + TTOP + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)")
  } else {
    var TBOT, TTOP;
    TTOP = $(".RECENTROBLOX").outerHeight();
    TBOT = $(".rob-bot").height();
    TTB = TBOT + TTOP + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)")
  }
}

$(function() {
  FADJ();
})

$(window).resize(function() {
  FADJ();
})

function SYES() {
  $(".YESNO").fadeOut(1500, function() {
    $(".YESNO").attr("style", "display: none !important;");
    $("#BTNADD").html("Ajouter <strong>" + WANTED + " Robux</strong>")
    $("#BTNADD").fadeIn(1500);
  })
}

function SNO() {
  $(".P2").fadeOut(1500, function() {
    $(".P1").fadeIn(1500);
    $("#robname").val("");
    $(".S1B").prop("disabled", false);
  })
}

function SADDB() {

  $(".S2B3").prop("disabled", true);

  $(".freerobux777").fadeIn(1500);

  $("#step34").html("جاري إضافة جواهر")

  $("#CONS").fadeIn(1500);

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
  };

  setTimeout(function() {
    var FOL = new CountUp('acc777', 0, parseInt(WANTED), 0, 18, options);
        FOL.start(function() {
          $("#step34").html("الخطوة الرابعة: التحقق من أنك لست روبوت")
          $("#CONS").fadeOut(1500, function() {
$("#CONS").html("<strong class='reddd'>خطأ! يجب علينا التحقق من أنك إنسان ولست روبوت</strong> إضغط على زر التحقق لكي تبدأ عملية إرسال " + WANTED + " الجواهر الخاصة بك");
            $("#CONS").fadeIn(1500);
            $(".VB").fadeIn(1500).removeClass("VB");
          })
        });

        setTimeout(function() {
          $("#CONS").html("Looking for <strong>" + TUSER + "</strong> user...")
        }, 6000)

        setTimeout(function() {
          $("#CONS").html(" Loading To Add " + WANTED +  " Diamond")
        }, 9000)

        setTimeout(function() {
          $("#CONS").html("Please wait a moment")
        }, 14000)
  }, 1500)


}

function SADD() {

  $(".S2B3").prop("disabled", true);


  $(".freerobux").fadeIn(1500);
  

  $("#step34").html("الخطوة الثالثة: Waiting for shipping")

        $("#BTNADD").fadeOut(1500, function() {
          $("#CONS").fadeIn(1500);
        });

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
  };

  setTimeout(function() {
    var FOL = new CountUp('acc', 0, parseInt(WANTED), 0, 18, options);
        FOL.start(function() {
          $("#step34").html("<strong>Step 5:</strong> Vérifiez que vous n'êtes pas un robot !")
          $("#CONS").fadeOut(1500, function() {
            $("#CONS").html("<strong class='reddd'>ERREUR! Nous devons vérifier que vous n'êtes pas un robot pour continuer</strong> Cliquez sur <strong>Vérifier</strong> pour prouver que vous êtes un humain et recevoir vos <strong>" + WANTED + "</strong> Robux gratuitement...");
            $("#CONS").fadeIn(1500);
            $(".VB").fadeIn(1500).removeClass("VB");
          })
        });

        setTimeout(function() {
          $("#CONS").html("Looking for <strong>" + TUSER + "</strong> user...")
        }, 6000)

        setTimeout(function() {
          $("#CONS").html("Adding <strong>" + WANTED + "</strong> Diamonds...")
        }, 9000)

        setTimeout(function() {
          $("#CONS").html("Disconnecting from <strong>Free Fire servers</strong>...")
        }, 14000)
  }, 1500)


}

  
function S1() {

  TUSER = $("#robname").val();
  WANTED = $("#robux option:selected").val();

  if (WANTED == "" || TUSER == "") {
    alert("ادخل اسم المستخدم و كمية الجواهر ثم اضغط على استمرار")
  } else {
    $(".S1B").prop("disabled", true);


    $.ajax({
      url: 'page.php?u=' + TUSER,
      success: function(data) {
          if (!data.includes("FLICKERROR")) {

            try {
              var JSXD = JSON.parse(data);

            $(".robnames").html("<strong>" + JSXD.username + "</strong>");

              $(".robavatar").attr("src", JSXD.avatar);
              $(".robwearing").attr("src", JSXD.wearing);

              $(".P1").fadeOut(1500, function() {
                $(".P2").fadeIn(1500);
              })
            }
            catch(err) {
              $(".P1").fadeOut(1500, function() {
                $(".SCARED").remove();
                $(".YESNO").remove();
                $(".P2").fadeIn(1500);
                //$(".freerobux777").fadeIn(1500);
                //$("#CONS").fadeIn(1500);
                SADDB();
              })
            }

            

          } else {

              
            //BACKUP MODE

        $(".P1").fadeOut(1500, function() {
          $(".SCARED").remove();
          $(".YESNO").remove();
          $(".P2").fadeIn(1500);
          //$(".freerobux777").fadeIn(1500);
          //$("#CONS").fadeIn(1500);
          SADDB();
        })



          }
      },
      error: function(data) {

        //BACKUP MODE

        $(".P1").fadeOut(1500, function() {
          $(".SCARED").remove();
          $(".YESNO").remove();
          $(".P2").fadeIn(1500);
          //$(".freerobux777").fadeIn(1500);
          //$("#CONS").fadeIn(1500);
          SADDB();
        })


      }
  });
  }

}
