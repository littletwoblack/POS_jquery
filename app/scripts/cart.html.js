/**
 * Created by zh on 14-12-6.
 */
$(document).ready(function(){
    var inputs = JSON.parse(sessionStorage.getItem("inputs_str"))

    if(inputs.length == 0)
    {
        alert('你的购物车为空!')
    }
    else
    {
       $("a[href='cart.html']").text("购物车（"+inputs.length.toString()+")")
        var test = new cart(inputs)
        console.log(test.get_all_promotion) ;
    }
}
)