/**
 * Created by zh on 14-12-10.
 */
var purchase = new Array()

function cart(inputs){
this.purchase=make_purchase(inputs)
this.get_totall=get_totall(this.purchase)
this.get_all_promotion = get_all_promotion(this.purchase)
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

function get_totall(purchase){
    var sum=0;
    _.map(purchase,function(item){
        if(item.promotion_flag==1&&item.count>=3)
        {
            sum+= (item.price *(item.count-parseInt(item.count / 3)))
        }
        else
        {
            sum+=item.price*item.count
        }
    })
    return sum
}
function get_all_promotion(purchase){
    var sum_promotion=0
    _.map(purchase,function(item){
        if(item.promotion_flag==1&&item.count>=3)
        {
            sum_promotion+=(item.price*parseInt(item.count/3))
        }
    })
    return sum_promotion
}