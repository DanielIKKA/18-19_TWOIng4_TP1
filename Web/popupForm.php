<div class="popup column w100 h100">



    <form class="form-container column relative" id="myForm">
        <h1 class="semi-bold tSize5 no_margin_top">Contact me !</h1>

        <input type="text" placeholder="Name" name="name">

        <input type="email" placeholder="Enter Email" name="email">

        <textarea placeholder="Write your small message" name="description" rows="7" cols="50"></textarea>

        <button type="submit" onclick="verify()" class="btn cancel">Send</button>

        <svg onclick="closePopup()">
            <line x1="0" x2="100%" y1="0" y2="100%" stroke="var(--blue_dark)" stroke-width="2"></line>
            <line x1="100%" x2="0" y1="0" y2="100%" stroke="var(--blue_dark)" stroke-width="2"></line>
        </svg>
    </form>
</div>

