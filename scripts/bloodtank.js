const BloodTank = extendContent(LiquidRouter, "bloodtank", {});

BloodTank.buildType = ()=>extend(Building,{
  buildConfiguration(table) {
       table.button("[red]"+this.liquids.get(Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"))+"/"+BloodTank.liquidCapacity+"m", run(() => {})).size(200,50);
       table.row();
       table.button("[blue][E] [white]Положить", run(() => {
        if(Vars.player.unit().health>15&&BloodTank.liquidCapacity!=this.liquids.get(Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"))){
          Vars.player.unit().health=Vars.player.unit().health-15;
          this.liquids.add(Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"),30)
          Vars.control.input.frag.config.hideConfig();
         }
        })).size(200,50);
        table.row();
       table.button("[red][F] [white]Взять", run(() => {
          //Действие
        })).size(200,50);
  },
  acceptLiquid(BloodTank,liquid){
    if(liquid == Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"))return true;
    return false;
  },
  draw(){
            Draw.rect(this.block.name+"-bottom", this.x, this.y);
            if(this.liquids.total() > 0.0001){
                Drawf.liquid(Core.atlas.find(this.block.name+"-liquid"), this.x, this.y, this.liquids.total() / this.block.liquidCapacity, this.liquids.current().color);
            }
            Draw.rect(this.block.name+"-top", this.x, this.y);
  },
  icons(){
    return [Core.atlas.find(this.name+"-bottom"),Core.atlas.find(this.name+"-top")];
  }
});
BloodTank.update = true;
BloodTank.configurable = true;