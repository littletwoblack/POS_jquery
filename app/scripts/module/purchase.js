/**
 * Created by zh on 14-12-10.
 */
var purchase = new Array()

function cart(inputs){
this.purchase=make_purchase(inputs)

}

function make_purchase(inputs)
{
    _.map(inputs,get_count)
    get_allinformation(purchase)

    return purchase
}


function get_count(barcode){
console.log(barcode);
    var b= _.indexOf(_.pluck(purchase,'barcode'),barcode.barcode);

    if (b==-1)
    {
        purchase.push({barcode:barcode.barcode,count:1})
    }
    else
    {
        purchase[b].count+=1
    }

    return purchase
}
function get_allinformation(purchase){
    var allitem=loadAllItems();
    _.map(purchase,function(){
        var b= _.indexOf()
    })
}