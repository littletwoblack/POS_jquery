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
    set_promotion_flag(purchase)
    return purchase
}


function get_count(barcode){
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
    _.map(purchase,function(item){
        var b= _.indexOf(_.pluck(allitem,'barcode'),item.barcode)
        item.name=allitem[b].name;
        item.price=allitem[b].price;
        item.unit=allitem[b].unit;
        item.group=allitem[b].group;
        return purchase
    })
}
function set_promotion_flag(purchase){
  var promotion_barcodes=loadPromotions()[0].barcodes

    _.map(purchase,function(item){

        var b= _.indexOf(promotion_barcodes,item.barcode)

        if(b==-1)
        {item.promotion_flag=0}
        else
        {item.promotion_flag=1}
    })
}