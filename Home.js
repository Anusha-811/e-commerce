const loadCoupon=()=>{
    console.log("inside load coupon")
    document.getElementsByClassName('coupon')[0].style.display = 'block';
    document.getElementsByClassName('card_main_container')[0].style.opacity='0.4';
    document.getElementsByClassName('containers')[0].style.opacity='0.4';
    document.getElementsByTagName('header').style.opacity='0.4';
    document.footer.style.opacity='0.5';
}
const closeCoupon=()=>{
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    document.getElementsByClassName('card_main_container')[0].style.opacity='1';
    document.getElementsByClassName('containers')[0].style.opacity='1';
}