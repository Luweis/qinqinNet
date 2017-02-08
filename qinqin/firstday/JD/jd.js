function Product() {
    this.name = "LW书包"
    this.normalPrice = 144
    this.groupbuyPrice = 1222
    this.buyNum = 100
    this.description = "买登山包，优选。。。"
    this.images = ["", "", ""];
}
Product.prototype = {

    buy: function () {

    },
    BindImg: function () {

    },
    // /*jquery插件实现的幻灯片特效*/
    // $('#etalage').etalage({
    //     thumb_image_width: 300,
    //     thumb_image_height: 400,
    //
    //     show_hint: true,
    //     click_callback: function(image_anchor, instance_id){
    //         alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
    //     }
    // });
    // // This is for the dropdown list example:
    // $('.dropdownlist').change(function(){
    //     etalage_show( $(this).find('option:selected').attr('class') );
    // });
    bindDomDetail: function () {
        $("#shopname").html(this.name);
        $("#normalPrice").html(this.normalPrice);
        $("#groupbuyPrice").html(this.groupbuyPrice);
        $("#description").html(this.description);
        $("#buyNum").html(this.buyNum);
    },
    bindImg: function () {
        for (var i = 0; i < this.images.length; i++) {
            var str = "<div class='pic'></div>";
            str += '<div class=" pic"></div>';
            str += '<div class=" pic"></div>'
        }
        $(".sigms").html(str);
    }

}
function Cart() {
    this.products = []
    this.sum = 3
    this.totalprice = 2000
}
Cart.prototype = {
    bindBasic: function () {
        $('#rate').html(this.products.length)
    },
    bindPrudcts: function () {
        var str = ''
        for (var i = 0; i < this.products.length; i++) {
            str += '<div class="box-list clearfix">'
            str += '<div class="right-img">'
            // str += '<img src="' + this.products[i]|'' + '" alt="">'
            str += '</div>'
            str += '<div class="detail-box ">'
            str += ' <div class="name">'+this.products[i].name+'</div>'
            str += '<div class="count"><span num>1X</span><span class="price">$12.00</span></div>'
            str += ' </div>'
            str += '<div class="cloes-box ">'
            str += '<img class="clearfix closeimg" src="images/close1.png" alt="">'
            str += '</div>'
            str += '</div>'
        }
        $("#goodscar").html(str);
    },

}
$(document).ready(function () {
    var product = new Product();
    product.name = "lw";
    product.normalPrice = 100;
    product.groupbuyPrice = 120;
    product.buyNum = 0;
    product.description = "周末一起去登山"
    product.images = ['11', '1', '21']
    product.bindImg();
    product.bindDomDetail();
    var cart = new Cart();
    cart.products.push(product);
    cart.products.push(product);
    cart.products.push(product);
    cart.bindBasic();
    cart.bindPrudcts();

    $("#add").click(function () {
        cart.products.push(product);
        cart.bindBasic();
        cart.bindPrudcts();
        $(window).scrollTop(0);
    });


});