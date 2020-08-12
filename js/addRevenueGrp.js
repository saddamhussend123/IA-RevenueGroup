
var insertParameter = function (e) {

    $(e).parent().parent().append(`<div id="param" class="col-xs-7 setPosition"><input type="text" class="form-control" name="watch" value="" placeholder="inesert parameter"/>
    <span class="addparam" onclick="insertParameter(this)">add rule</span>
   </div>`);
    $(e).parent().append(' <span style="display:block" onclick="removeParameter(this)" class="removeRule">remove rule</span>');
    $(e).remove();
}

var removeParameter = function (e) {
    $(e).parent().remove();
}


var addNewRule = function () {

    $('#newRuleMain').append(`<div class="row ruleFieldMain">
    <hr>
    <div class="col-xs-2">
        <div class="dropdown">
        <select class="grpConditionMain" id="cars">
        <option>aff_sub</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
        </div>
    </div>
    <div class="col-xs-2">
        <div class="dropdown">
        <select class="grpConditionMain" id="cars">
        <option>is</option>
        <option>yes</option>
        <option>no</option>
        <option>is not</option>
    </select>
        </div>
    </div>
    <div id="insertParameter">
        <div class="col-xs-7" id="param">
            <input type="text" class="form-control" name="watch" value=""
                placeholder="insert parameter" />
                <span class="addparam" onclick="insertParameter(this)">add rule</span>
           
        </div>
        
    </div>
    
    <div class="removePRule" onclick="removepRule(this)"
    style="width: 20px;height: 20px;margin-right: 50px; float: right;margin-top: -24px;margin-left: 26%;">
    <i title="Remove Rule"  class="fa fa-minus-circle iconSize"></i>
</div>
    
</div>`);
}

var removepRule = function (e) {
    $(e).parent().remove();
}

var submitForm = function () {
    location.reload();
}
