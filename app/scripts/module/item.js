/**
 * Created by zh on 14-12-6.
 */
function Item(group,barcode, name, unit, price) {
    this.group = group
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}
