$(document).ready(function() {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Updating the states dropdown/field based on country selection
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var updateBillStates = function() {
        $.ajax({
            url: "/states/by_country?country_id="+$('#bill_countries_dropdown').val(),
            dataType: "json",
            beforeSend: function (request) {
                $("#bill_address_states_input").hide();
                $("#bill_address_states_dropdown").hide();
            },
            success: function (data) {
                if (data.states != null && data.states.length > 0) {
                    $("#bill_address_states_dropdown").show();
                    $('#bill_address_states_dropdown').distal(data);
                    $("#bill_address_states_dropdown").val($("#bill_address_states_dropdown").attr('value'));

                } else {
                    $("#bill_address_states_input").show();
                }
            }
        });
    }
    var updateShipStates = function() {
        $.ajax({
            url: "/states/by_country?country_id="+$('#ship_countries_dropdown').val(),
            dataType: "json",
            beforeSend: function (request) {
                $("#ship_address_states_input").hide();
                $("#ship_address_states_dropdown").hide();
            },
            success: function (data) {
                if (data.states != null && data.states.length > 0) {
                    $("#ship_address_states_dropdown").show();
                    $('#ship_address_states_dropdown').distal(data);
                    $("#ship_address_states_dropdown").val($("#ship_address_states_dropdown").attr('value'));
                } else {
                    $("#ship_address_states_input").show();
                }
            }
        });
    }

    if ($("#bill_countries_dropdown").is('*')) {
        updateBillStates();
        updateShipStates();

        $("#bill_countries_dropdown").change(updateBillStates);
        $("#ship_countries_dropdown").change(updateShipStates);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Toggling use billing address for shipping
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var updateShipFormVisible = function() {
        if ($('#use_billing').is(':checked'))
            $('#ship_address_form').hide();
        else
            $('#ship_address_form').show();
    }

    updateShipFormVisible();
    $('#use_billing').click(updateShipFormVisible);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Form validation
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#checkout-form").validate({
        rules: {
            agree: "required",
            'order[bill_address_attributes][firstname]': {
                required: true
            },
            'order[bill_address_attributes][lastname]': {
                required: true
            },
            'order[bill_address_attributes][phone]': {
                required: true
            },
            'order[bill_address_attributes][address1]': {
                required: true
            },
            'order[bill_address_attributes][city]': {
                required: true
            },
            'order[bill_address_attributes][zip]': {
                required: true
            },
            'order[bill_address_attributes][country_id]': {
                required: true
            },
            'order[bill_address_attributes][state_id]': {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function(element) {
            element.addClass('valid').closest('.control-group').removeClass('error');
        }
    });
})
