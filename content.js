let createForType = null;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type == "keyEvent") {
        let getTagId = message.message.event.tagId;
        let getValueId = message.message.event.value;
        let getClassName = message.message.event.tagClassName;
        let getInputType = message.message.event.inputType;
        let getTagName = message.message.event.tagName;
        let getClassType = message.message.event.classType;
        let getTypeName = message.message.event.typeName;
        if (getTagId) {
            let createTagId = document.getElementById(getTagId);
            createTagId.value = getValueId;
        }
        else if (getClassName) {
            let createClassName = document.getElementsByClassName(getClassName);
            if (createClassName.length) {
                createClassName[getClassType].value = getValueId;
            }


            else if (getInputType) {
                let createClassType = document.getElementsByTagName(getInputType);

                if (createClassType.length) {
                    createClassType[getTypeName].value = getValueId;
                }

            }
        }
        else if (getTagName) {
            let createInputType = document.getElementsByTagName(getInputType.toLowerCase());
            for (let i = 0; i < createInputType.length; i++) {
                if (getTagName === createInputType[i].name) {
                    createInputType[i].value = getValueId;
                }
            }
            let createTagName = document.getElementsByTagName(getTagName);
            createTagName.value = getValueId;
        }
    }
    else if (message.type === "labelEvent") {
        let labelId = message.message.event.id;
        let labelValue = message.message.event.value;
        let labelType = message.message.event.type;
        let labelClassName = message.message.event.className;
        let labelTagName = message.message.event.tagName;
        let labelChecked = message.message.event.checked;

        if (labelId) {
            let createId = document.getElementById(labelId);
            createId.value = labelValue;
            createId.checked = labelChecked;
        }
        else if (labelTagName) {
            let createLabelTag = document.getElementsByTagName(labelTagName);
            for (let p = 0; p < createLabelTag.length; p++) {
                let getLabelTag = createLabelTag[p];
                if (getLabelTag.type === labelType) {
                    if (getLabelTag.value === labelValue) {
                        getLabelTag.checked = labelChecked;
                    }
                }
            }
        }

    }

    else if (message.type === "inputEvent") {
        let checkBoxId = message.message.event.id;
        let checkBoxTagName = message.message.event.tagName;
        let checkBoxClassName = message.message.event.className;
        let checkBoxType = message.message.event.type;
        let checkBoxValue = message.message.event.value;
        let checkBoxChecked = message.message.event.checked;
        let checkBoxName = message.message.event.name;

        if (checkBoxId) {
            let createCBId = document.getElementById(checkBoxId);
            createCBId.checked = checkBoxChecked;
        }
        else if (checkBoxTagName) {
            let createCBTagName = document.getElementsByTagName(checkBoxTagName);
            for (j = 0; j < createCBTagName.length; j++) {
                if (checkBoxType === createCBTagName[j].type) {
                    if (checkBoxValue === createCBTagName[j].value) {
                        createCBTagName[j].checked = checkBoxChecked;
                    }
                }
            }
        }
    }
    else if (message.type === "dateEvent") {
        let dateId = message.message.event.id;
        let dateType = message.message.event.type;
        let dateName = message.message.event.name;
        let dateClassName = message.message.event.className;
        let dateTagName = message.message.event.tagName;
        let dateTagNameIndex = message.message.event.tagNameIndex;
        let dateValue = message.message.event.value;
        if (dateId) {
            let createDateId = document.getElementById(dateId);
            createDateId.value = dateValue;
        }
        else if (dateName != "undefined" && dateType === "date") {
            let createDateInput = document.getElementsByTagName("INPUT");
            for (let n = 0; n < createDateInput.length; n++) {
                if (createDateInput[n]) {
                    let getInputTag = createDateInput[n];
                    getInputTag.value = dateValue;
                }
            }
        }
        else if (dateTagName) {
            let createDateTagName = document.getElementsByTagName(dateTagName);
            createDateTagName[dateTagNameIndex].value = dateValue;
        }
        else if (dateClassName) {
            let createDateClassName = document.getElementsByClassName(dateClassName);
        }
    }
    else if (message.type === "timeEvent") {
        let timeId = message.message.event.id;
        let timeType = message.message.event.type;
        let timeName = message.message.event.name;
        let timeClassName = message.message.event.className;
        let timeTagName = message.message.event.tagName;
        let timeTagNameIndex = message.message.event.tagNameIndex;
        let timeValue = message.message.event.value;
        if (timeId) {
            let createTimeId = document.getElementById(timeId);
            createTimeId.value = timeValue;
        }
        else if (timeName != "undefined" && timeType === "date") {
            let createTimeInput = document.getElementsByTagName("INPUT");
            for (let n = 0; n < createTimeInput.length; n++) {
                if (createTimeInput[n]) {
                    let getInputTag = createTimeInput[n];
                    getInputTag.value = timeValue;
                }
            }
        }
        else if (timeTagName) {
            let createTimeTagName = document.getElementsByTagName(timeTagName);
            createTimeTagName[timeTagNameIndex].value = timeValue;
        }
        else if (timeClassName) {
            let createTimeClassName = document.getElementsByClassName(timeClassName);
        }
    }
    else if (message.type === "textEvent") {
        let textId = message.message.event.id;
        let textType = message.message.event.type;
        let textName = message.message.event.name;
        let textClassName = message.message.event.className;
        let textTagName = message.message.event.tagName;
        let textTagNameIndex = message.message.event.tagNameIndex;
        let textValue = message.message.event.value;
        if (textId) {
            let createTextId = document.getElementById(textId);
            if (createTextId.value = textValue) {
                createTextId.value = textValue;
            }
        }
        else if (textName != "undefined" && textType === "date") {
            let createTextInput = document.getElementsByTagName("INPUT");
            for (let n = 0; n < createTextInput.length; n++) {
                if (createTextInput[n]) {
                    let getInputTag = createTextInput[n];
                    getInputTag.value = textValue;
                }
            }
        }
        else if (textTagName) {
            let createTextTagName = document.getElementsByTagName(textTagName);
            if (createTextTagName.value = textValue) {
                createTextTagName.value = textValue;
            }
        }
        else if (textClassName) {
            let createTextClassName = document.getElementsByClassName(textClassName);
        }
    }

})
document.addEventListener('keyup', function (e) {
    let keyList = ["INPUT", "TEXTAREA", "SELECT"]
    let keyData = keyList.includes(e.target.tagName)
    if (keyData) {
        let createClassName = Array.from(document.getElementsByClassName(e.target.className));
        let classData = createClassName.findIndex((element) => element === e.target);
        let createType = Array.from(document.getElementsByTagName(e.target.tagName))
        let typeData = createType.findIndex((element) => element === e.target)
        chrome.runtime.sendMessage({
            type: 'keyEvent',
            event: {
                value: e.target.value,
                tagClassName: e.target.className,
                tagId: e.target.id,
                tagName: e.target.name,
                inputType: e.target.tagName,
                tagType: e.target.type,
                classType: classData,
                typeName: typeData

            }
        })
    }
});

document.addEventListener('mouseup', function (e) {
    if (e.target.tagName === "LABEL") {
        let forType = e.target.attributes;
        let getForType = forType.for.value;
        let createForType = document.getElementById(getForType);
        if (createForType !== undefined) {
            if (createForType.type === "checkbox") {
                chrome.runtime.sendMessage({
                    type: "labelEvent",
                    event: {
                        tagName: createForType.tagName,
                        type: createForType.type,
                        className: createForType.className,
                        id: createForType.id,
                        value: createForType.value,
                        checked: !createForType.checked
                    }
                })
            }
        }
    }

    else if (e.target.tagName === "INPUT") {
        let checkType = e.target.attributes;
        let getCheckType = checkType.type.value;
        let getTagName = e.target;
        if (getTagName !== undefined) {
            if (getCheckType === "checkbox") {
                chrome.runtime.sendMessage({
                    type: "inputEvent",
                    event: {
                        type: getTagName.type,
                        className: getTagName.className,
                        id: getTagName.id,
                        value: getTagName.value,
                        name: getTagName.name,
                        checked: !getTagName.checked
                    }
                })
            }
        }
    }
});
window.addEventListener('beforeunload', function (event) {
})

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
    afterDOMLoaded()
}
function afterDOMLoaded() {
    setTimeout(() => {
        document.addEventListener("change", function (event) {
            let getAllInput = document.getElementsByTagName("INPUT");
            for (let k = 0; k < getAllInput.length; k++) {
                if (getAllInput.length) {
                    let createDateType = getAllInput[k];
                    let inputDataType = createDateType.parentElement;
                    let inputDateType = createDateType.type;
                    if(createDateType === "dateEvent"){
                        chrome.runtime.sendMessage({
                            type: "dateEvent",
                            event: {
                                type: createDateType.type,
                                className: createDateType.className,
                                id: createDateType.id,
                                value: createDateType.value,
                                name: createDateType.name
                            }
                        })
                    }

                }
            }
        })
        document.addEventListener("focusin", function (e) {
            let focusInType = e.target;
            let checkInType = e.target.type;
            let getFocusInType = Array.from(document.getElementsByTagName("INPUT"));
            let gotFocusInType = getFocusInType.findIndex((element) => element === focusInType);
            if (checkInType === "textEvent") {
                chrome.runtime.sendMessage({
                    type: "textEvent",
                    event: {
                        tagName: focusInType.tagName,
                        type: focusInType.type,
                        className: focusInType.className,
                        id: focusInType.id,
                        value: focusInType.value,
                        name: focusInType.name,
                        tagNameIndex: gotFocusInType
                    }
                })
            }
            else if (checkInType === "dateEvent") {
                chrome.runtime.sendMessage({
                    type: "dateEvent",
                    event: {
                        tagName: focusInType.tagName,
                        type: focusInType.type,
                        className: focusInType.className,
                        id: focusInType.id,
                        value: focusInType.value,
                        name: focusInType.name,
                        tagNameIndex: gotFocusInType
                    }
                })
            }
            else {
                chrome.runtime.sendMessage({
                    type: "timeEvent",
                    event: {
                        tagName: focusInType.tagName,
                        type: focusInType.type,
                        className: focusInType.className,
                        id: focusInType.id,
                        value: focusInType.value,
                        name: focusInType.name,
                        tagNameIndex: gotFocusInType
                    }
                })
            }


        });
        document.addEventListener("focusout", function (e) {
            let focusOutType = e.target;
            let checkFOType = e.target.type;
            let getFocusOutType = Array.from(document.getElementsByTagName("INPUT"));
            let gotFocusOutType = getFocusOutType.findIndex((element) => element === focusOutType);
            if (checkFOType === "textEvent") {
                chrome.runtime.sendMessage({
                    type: "textEvent",
                    event: {
                        tagName: focusOutType.tagName,
                        type: focusOutType.type,
                        className: focusOutType.className,
                        id: focusOutType.id,
                        value: focusOutType.value,
                        name: focusOutType.name,
                        tagNameIndex: gotFocusOutType
                    }
                })
            }
            else if (checkFOType === "timeEvent") {
                chrome.runtime.sendMessage({
                    type: "timeEvent",
                    event: {
                        tagName: focusOutType.tagName,
                        type: focusOutType.type,
                        className: focusOutType.className,
                        id: focusOutType.id,
                        value: focusOutType.value,
                        name: focusOutType.name,
                        tagNameIndex: gotFocusOutType
                    }
                })
            }
            else {
                chrome.runtime.sendMessage({
                    type: "dateEvent",
                    event: {
                        tagName: focusOutType.tagName,
                        type: focusOutType.type,
                        className: focusOutType.className,
                        id: focusOutType.id,
                        value: focusOutType.value,
                        name: focusOutType.name,
                        tagNameIndex: gotFocusOutType
                    }
                })
            }
        });
        document.addEventListener("focus", function (e) {
            let focusType = e.target;
            let checkFType = e.target.type;
            let getFocusType = Array.from(document.getElementsByTagName("INPUT"));


            let gotFocusType = getFocusType.findIndex((element) => element === focusType);
            if (checkFType === "textEvent") {
                chrome.runtime.sendMessage({
                    type: "textEvent",
                    event: {
                        tagName: focusType.tagName,
                        type: focusType.type,
                        className: focusType.className,
                        id: focusType.id,
                        value: focusType.value,
                        name: focusType.name,
                        tagNameIndex: gotFocusType
                    }
                })
            }
            else if (checkFType === "timeEvent") {
                chrome.runtime.sendMessage({
                    type: "timeEvent",
                    event: {
                        tagName: focusType.tagName,
                        type: focusType.type,
                        className: focusType.className,
                        id: focusType.id,
                        value: focusType.value,
                        name: focusType.name,
                        tagNameIndex: gotFocusType
                    }
                })
            }
            else {
                chrome.runtime.sendMessage({
                    type: "dateEvent",
                    event: {
                        tagName: focusType.tagName,
                        type: focusType.type,
                        className: focusType.className,
                        id: focusType.id,
                        value: focusType.value,
                        name: focusType.name,
                        tagNameIndex: gotFocusType
                    }
                })
            }
        })


    }, 1000)

}



