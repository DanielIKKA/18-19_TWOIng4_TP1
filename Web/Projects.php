<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Projects</title>
    <link rel="icon" type="image/png" href="../Assets/Images/icon-cv.png" />

    <link href="../Stylesheets/General.css" type="text/css" rel="stylesheet">
    <link href="../Stylesheets/Nav&FooterStylesheet.css" type="text/css" rel="stylesheet">
    <link href="../Stylesheets/PopupStylesheet.css" type="text/css" rel="stylesheet">

    <link href="../Stylesheets/PageStylesheet.css" type="text/css" rel="stylesheet">

</head>

<body>

<!-- Include the page's header -->
<?php include("Header.php"); ?>

<main>
    <section id="La_Distrib">
        <h1 id="title" class="extra-bold no_margin_down">La Distrib'</h1>
        <div id='lines' class="row_justify_center">
            <svg id="line_l" width="40%" height="2">
                <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
            </svg>
            <svg id="line_r" width="40%" height="2">
                <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
            </svg>
        </div>
        <article id="la_Distrib'_article" class="column">
            <div class="row left">
                <aside class="column w25">
                    <img class="max-h85 max-w100 contain" src="../Assets/Images/LogoLaDistrib'(arrondi).png" alt="icon">
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">La Distrib'</h2>
                    <h3 class="medium italic no_margin_top no_margin_down">ECE-Paris.Lyon (<span class="thin">Ecole Centrale d'Electronique</span>), Paris</h3>
                    <h4 class="no_margin_top">Oct. 2017 to Jun. 2018</h4>
                    <p>
                        <span class="medium">200 man-days / 4 students</span><br>
                        The project is a connected distributor of emergency supplies.
                        <br><br>
                        - Implementation of a physical prototype<br>
                        - Design of a functional prototype for a mobile application (iOS development)
                    </p>
                </div>
            </div>
                <footer class="row">
                    <video class="w50" controls>
                        <source src="../Assets/Videos/PSTE_laDistrib.mp4" type="video/mp4">
                    </video>
                    <video class="w20" controls>
                        <source src="../Assets/Videos/Demo.mp4" type="video/mp4">
                    </video>
                </footer>

        </article>



    </section>

    <section id="ATMeds">
        <h1 class="extra-bold no_margin_down">ATMed's</h1>
        <div id='lines' class="row_justify_center">
            <svg id="line_l" width="40%" height="2">
                <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
            </svg>
            <svg id="line_r" width="40%" height="2">
                <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
            </svg>
        </div>
        <article id="ATM_article" class="row left">
            <aside class="column w25">
                <img class="max-h85 max-w100 contain" src="../Assets/Images/atm.png" alt="icon">
            </aside>
            <div class="w75 content_wrapper">
                <h2 class="no_margin_down">ATM<span class="italic">ed's</span></h2>
                <h3 class="medium italic no_margin_top no_margin_down">ECE-Paris.Lyon (<span class="thin">Ecole Centrale d'Electronique</span>), Paris</h3>
                <h4 class="no_margin_top">Oct. 2016 to June. 2017</h4>
                <p>
                    <span class="medium">100 man-days / 6 students</span><br>
                    The project is a connected pill box. <br>
                    <br>
                    - Needs analysis <br>
                    - Product modeling
                </p>
            </div>
        </article>
    </section>

    <h4 class="dates d_left">example</h4>
    <h4 class="dates d_right">example</h4>
</main>

<!-- Include the popup -->
<?php include("popupForm.php"); ?>

<!-- Include the page's footer -->
<?php include("Footer.php"); ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="../JavaScript/NavBar.js" type="text/javascript" rel="script"></script>
<script src="../JavaScript/popup.js" type="text/javascript" rel="script"></script>

<script src="../JavaScript/Projects.js" type="text/javascript" rel="script"></script>
</body>
</html>




