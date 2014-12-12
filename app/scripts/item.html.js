/**
 * Created by zh on 14-12-6.
 */

$(document).ready(function(){
        make_items_table();

       var inputs=new Array();
        $("button[name='add']").click(
            function(){

//                console.log(typeof JSON.parse(sessionStorage.inputs))
                inputs.push({barcode:$(this).attr('value')})
                $("a[href='cart.html']").text("购物车( "+ inputs.length.toString()+" )")

                sessionStorage.setItem("inputs_str",JSON.stringify(inputs))
//                console.log("123");
//                console.log((sessionStorage.getItem('inputs_str')));
//                console.log("111");
            }
        )

    }
)

function make_items_table(){
    var content="<table class='table table-bordered text-center'> <tr> <td>分类</td>" +
        " <td>名称</td> <td>单价(元)</td><td>单位</td> <td></td> </tr>"
    content= _.reduce(loadAllItems(),function(content,item){
        var tr="<tr> <td>"
            +item.group+"</td> <td>"
            +item.name+"</td> <td>"
            +item.price+"</td> <td>"
            +item.unit+"</td> <td>" +
            "<button name='add'  value='"+item.barcode+"' class='btn-lg btn-primary btn btn-sm'>加入购物车</button>"
            +"</td> </tr>"
        content+=tr
        return content
    },content)
    content+="</table>"
    $('#tbdiv').append(content)

}