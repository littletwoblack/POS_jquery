/**
 * Created by zh on 14-12-6.
 */
$(document).ready(function(){
       var inputs =sessionStorage.getItem("inputs_str")
    console.log('inputs')
    if(inputs.length == 0)
    {
        alert('你的购物车为空!')
    }
    else
    {
        alert('不为空!')
    }
}
)