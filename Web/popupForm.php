<div class="popup column" id="myForm">

    <svg onclick="closeForm()">
        <line x1="0" x2="30" y1="0" y2="30" stroke="white" stroke-width="2"></line>
        <line x1="30" x2="0" y1="0" y2="30" stroke="white" stroke-width="2"></line>
    </svg>

    <form class="form-container column w100 h100">
        <h1 class="semi-bold tSize5 no_margin_top">Contact me !</h1>

        <input type="text" placeholder="Name" name="Name" required>

        <input type="email" placeholder="Enter Email" name="email" required>

        <textarea placeholder="Write your small message" name="description" rows="7" cols="50"></textarea>

        <button type="submit" class="btn cancel" onclick="closeForm()">Send</button>
    </form>
</div>

