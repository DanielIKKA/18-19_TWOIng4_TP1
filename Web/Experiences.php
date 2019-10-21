<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Work Experiences</title>

    <link href="../Stylesheets/General.css" type="text/css" rel="stylesheet">
    <link href="../Stylesheets/Nav&FooterStylesheet.css" type="text/css" rel="stylesheet">
    <link href="../Stylesheets/PopupStylesheet.css" type="text/css" rel="stylesheet">

    <link href="../Stylesheets/PageStylesheet.css" type="text/css" rel="stylesheet">
</head>

<body>

    <!-- Include the page's header -->
    <?php include("Header.php"); ?>

    <main>
        <section id="intern_section">
            <h1 class="extra-bold no_margin_down">Intern Experiences</h1>
            <div id='lines' class="row_justify_center">
                <svg id="line_l" width="40%" height="2">
                    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
                </svg>
                <svg id="line_r" width="40%" height="2">
                    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
                </svg>
            </div>
            <article id="kuantom_article" class="row left">
                <aside class="column w25">
                    <img class="max-h50 max-w100 contain" src="../Assets/Images/kuantom.png" alt="icon">
                    <footer class="row h25 w100">
                        <a href="https://www.kuantom.com">
                            <img class="contain w100 h100" src="../Assets/Images/webIcon.png" alt="webIcon">
                        </a>
                        <a href="https://www.linkedin.com/company/kuantom">
                            <img class="contain h100 w100" src="../Assets/Images/linkedIn.png" alt="linkedInIcon">
                        </a>
                    </footer>
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Intern<span class="light italic"> as </span>Back-end Developer</h2>
                    <h3 class="medium italic no_margin_top">Kuantom, Paris (<span class="thin">Startup specialized in the design of connected solutions in beverage industry.</span>)</h3>
                    <h4>July 2019 to August 2019</h4>
                    <p>
                        As the CTO’s assistant<br>
                        - Web front development HTML, CSS, JS<br>
                        - Web back development PHP, SQL, creation of an internal API<br>
                        - Back and Front-end Frameworks (Symphony and Materialize)
                    </p>
                </div>
            </article>

            <article id="sidLee_article" class="row right">
                <aside class="column w25">
                    <img class="max-h50 max-w100 contain" src="../Assets/Images/sidlee.png" alt="icon">
                    <footer class="row h25 w100">
                        <a href="https://sidlee.com/fr"><img class="contain w100" src="../Assets/Images/webIcon.png" alt="webIcon"></a>
                        <a href="https://www.linkedin.com/company/sid-lee/"><img class="contain w100" src="../Assets/Images/linkedIn.png" alt="linkedInIcon"></a>
                        <a href="https://www.youtube.com/user/Sidleetv"><img class="contain w100" src="../Assets/Images/youtubeIcon.png" alt="youtubeIcon"></a>
                    </footer>
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Intern<span class="light italic"> in </span>the Production / Dev-ops Division</h2>
                    <h3 class="medium italic no_margin_top">Sid Lee, Paris (<span class="thin">advertising agency / communication / creation approx. 70 employees</span>)</h3>
                    <h4>Jan. 2018 to Feb. 2018</h4>
                    <p>
                        - Participation in the prototyping and development of an iOS application.<br>
                        - Teamwork and networking with the different divisions / sectors of the agency.<br>
                        - Discovery of the ecosystem of an advertising and communication agency.
                    </p>
                </div>
            </article>
        </section>

        <section id="student_job_section">
            <h1 class="no_margin_down extra-bold">Student Jobs</h1>
            <div id='lines' class="row_justify_center">
                <svg id="line_l" width="40%" height="2">
                    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
                </svg>
                <svg id="line_r" width="40%" height="2">
                    <line x1="0" y1="0" x2="100%" y2="0" style="stroke:var(--blue_dark); stroke-width:3px"></line>
                </svg>
            </div>

            <article id="teacher_article" class="row left">
                <aside class="column w25">
                    <img class="max-h85 max-w100 contain" src="../Assets/Images/tutorat.png" alt="icon">
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Multidisciplinary teacher</h2>
                    <h3 class="medium italic no_margin_top">Paris areas</h3>
                    <h4>September 2015 - current</h4>
                    <p>
                        Regular private tutor in <span class="medium">mathematics</span>  / <span class="medium">physics</span>
                        (grades 6 to 12) and <span class="medium">computer sciences</span> / <span class="medium">programming</span>
                        (higher education).<br>
                        Volunteer at the ECE Paris Tutorat association of my school to assist teachers during the "TD"
                        (Directed Works) and supervise support sessions for the 1st and 2nd years.
                    </p>
                </div>
            </article>

            <article id="polling_agent_article" class="row right">
                <aside class="column w25">
                    <img class="max-h85 max-w100 contain" src="../Assets/Images/marieParis.png" alt="icon">
                </aside>
                <div class="w75 content_wrapper">
                    <h2 class="no_margin_down">Polling station agent</h2>
                    <h3 class="medium italic no_margin_top">Marie de Paris, Paris</h3>
                    <h4>April 2017 - current</h4>
                    <p>
                        In municipal, regional, national or European elections<br>
                        - Organize / Set up a polling station<br>
                        - Manage the polling station during presidential elections<br>
                        - Supervise the counting of the votes
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

    <script src="../JavaScript/Experience.js" type="text/javascript" rel="script"></script>
</body>
</html>


