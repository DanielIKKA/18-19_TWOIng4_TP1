<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Education</title>
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
        <section id="High-school">
            <h1 class="extra-bold no_margin_down">Higher Education</h1>
            <div id='lines' class="row_justify_center">
                <svg id="line_l" width="40%" height="2">
                    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
                </svg>
                <svg id="line_r" width="40%" height="2">
                    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
                </svg>
            </div>
            <article id="Ece-Master" class="row left">
                <aside class="column w25">
                    <img class="max-h50 max-w100 contain" src="../Assets/Images/logo_ece.png" alt="icon">
                    <footer class="row h25 w100">
                        <a href="https://www.ece.fr/ecole-ingenieur/">
                            <img class="contain w100 h100" src="../Assets/Images/webIcon.png" alt="webIcon">
                        </a>
                        <a href="https://www.linkedin.com/school/ece-paris-lyon/">
                            <img class="contain h100 w100" src="../Assets/Images/linkedIn.png" alt="linkedInIcon">
                        </a>
                    </footer>
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Engineer<span class="light italic"> Cycle</span></h2>
                    <h3 class="medium italic no_margin_top no_margin_down">ECE-Paris.Lyon (<span class="thin">Ecole Centrale d'Electronique</span>), Paris</h3>
                    <h4 class="no_margin_top">Feb. 2019 - current</h4>
                    <p class="light">
                        Master's degree in engineering, major in <span class="medium">Connected Objects Networks and Services.</span><br>
                        <br>
                        <span class="semi-bold">Options / Minor followed:</span><br>
                        Entrepreneurship / Business Engineering / Spanish<br>
                        <span class="semi-bold">Other courses followed:</span><br>
                        - Web technologies <br>
                        - iOT and sensors embedded <br>
                        - Design Thinking <br>
                        - Mobile Development<br>
                        - Protocols and IP Networks
                    </p>
                </div>
            </article>

            <article id="Erasmus" class="row right">
                <aside class="column w25">
                    <img class="max-h50 max-w100 contain" src="../Assets/Images/malmo_uni.png" alt="icon">
                    <footer class="row h25 w100">
                        <a href="https://mau.se/"><img class="contain w100" src="../Assets/Images/webIcon.png" alt="webIcon"></a>
                        <a href="https://www.linkedin.com/school/malmo-universitet/"><img class="contain w100" src="../Assets/Images/linkedIn.png" alt="linkedInIcon"></a>
                    </footer>
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Erasmus<span class="light italic"> Exchange </span></h2>
                    <h3 class="medium italic no_margin_top no_margin_down">Malmö University, <span class="thin">Sweden</span></h3>
                    <h4 class="no_margin_top">Sept. 2018 to Feb. 2019</h4>
                    <p class="light">

                        First semester abroad.<br>
                        <span class="semi-bold">Courses attended:</span><br>
                        - iOT (Internet of Things) for beginners<br>
                        - Advanced Programming (algorithmic and math applied courses)<br>
                        - Advances in Software Development (project management techniques)<br>
                        - Swedish for beginners
                    </p>
                </div>
            </article>

            <article id="Ece-Cycle" class="row left">
                <aside class="column w25">
                    <img class="max-h50 max-w100 contain" src="../Assets/Images/logo_ece.png" alt="icon">
                    <footer class="row h25 w100">
                        <a href="https://www.ece.fr/ecole-ingenieur/">
                            <img class="contain w100 h100" src="../Assets/Images/webIcon.png" alt="webIcon">
                        </a>
                        <a href="https://www.linkedin.com/school/ece-paris-lyon/">
                            <img class="contain h100 w100" src="../Assets/Images/linkedIn.png" alt="linkedInIcon">
                        </a>
                    </footer>
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Preparatory<span class="light italic"> Cycle</span></h2>
                    <h3 class="medium italic no_margin_top no_margin_down">ECE-Paris.Lyon (<span class="thin">Ecole Centrale d'Electronique</span>), Paris</h3>
                    <h4 class="no_margin_top">Sept. 2016 - Jun. 2018</h4>
                    <p class="light">
                        Scientific teaching in the preparatory classes. In addition, there are courses in electronics and computer science (programming) as well as individual and collective projects.
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

    <script src="../JavaScript/Edu.js" type="text/javascript" rel="script"></script>
    </body>
</html>