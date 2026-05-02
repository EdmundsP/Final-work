<header>
    <div class="header_container">
        <div class="site_header">
            <div class="logo"></div>
            <nav>
                <a class="btn_nav underline" href="./index.php">Home</a>
                <div class="dropdown">
                    <div class="drop_active_cont">
                        <a href="#" class="btn_drop__active">Shop</a>
                    </div>
                    <a class="underline_shop btn_drop" href="./shop.php">Shop</a>
                    <div class="drop_box">
                        <a href="./original_paintings.php" class="drop_content">original paintings</a>
                        <a href="./prints.php" class="drop_content">prints</a>
                    </div>
                </div>
                <a class="btn_nav underline" href="./about.php">About</a>
                <a class="btn_nav underline" href="./contact.php">Contact</a>
            </nav>
            <div class="icon_menu">
                <div class="search_expend">
                    <a class="icon search__dark" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </a>
                    <input class="nav_input" type="text" placeholder="Search our store">
                    <a class="icon close__dark" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                    </a>
                </div>
                <a class="icon search" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </a>
                <a href="#" class="icon hiden_menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                </a>
                <a class="icon cart" href="#" id="cart_open" style="position:relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span class="cart_count" id="cart_count" style="display:none;"></span>
                </a>
            </div>
        </div>
    </div>
    <div class="small_screen_main">
        <div class="drawer_block">
            <div class="mobile_nav__header">
                <a class="icon close" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                </a>
            </div>
            <ul class="mobile_nav">
                <li class="mobile_nav__item">
                    <a class="btn__mobile" href="./index.php">home</a>
                </li>
                <li class="mobile_nav__item drow">
                    <a class="btn__mobile" href="./shop.php">shop</a>
                    <a class="icon_open" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </a>
                </li>
                <div class="drop_box_mob">
                    <a href="./original_paintings.php" class="drop_content">original paintings</a>
                    <a href="./prints.php" class="drop_content">prints</a>
                </div>
                <li class="mobile_nav__item">
                    <a class="btn__mobile" href="./about.php">about</a>
                </li>
                <li class="mobile_nav__item">
                    <a class="btn__mobile" href="./contact.php">contact</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- Cart Drawer -->
    <div id="cart_drawer" class="cart_drawer">
        <div class="cart_drawer__header">
            <h3>Shopping Cart</h3>
            <a href="#" id="cart_close" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
            </a>
        </div>
        <div id="cart_items" class="cart_items"></div>
        <div class="cart_drawer__footer">
            <div class="cart_total_row">Total: <span id="cart_total">€0.00</span></div>
            <p class="p_update cart_note">To complete your order, please contact us with your selection.</p>
            <a href="contact.php" class="btn_accent">Contact to Order</a>
        </div>
    </div>
    <div id="cart_overlay" class="cart_overlay"></div>
</header>
