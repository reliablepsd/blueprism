if ($("[id^=mktoForm_]").length) {

  var mktoLead = {};

  MktoForms2.whenReady( function(mktoForm) {
    $.ajax({
      dataType: "json",
      url: "/marketo_prefill_handler.php",
      data: {
        cookie_value: Cookies.get("_mkto_trk")
      },
      success: function(data) {
        if (data.success) {
          mktoLead = data.result[0];
          if (!(mktoLead === undefined) && !(mktoLead.id === undefined)) {
            var mktoLeadFields = mktoLead;
            var prefillFields = {
              "Email" : mktoLeadFields.email,
              "FirstName" : mktoLeadFields.firstName,
              "LastName" : mktoLeadFields.lastName,
              "Company" : mktoLeadFields.company,
              "Title" : mktoLeadFields.title,
              "Phone" : mktoLeadFields.phone,
              "Industry" : mktoLeadFields.industry,
              "Country" : mktoLeadFields.country,
              "State" : mktoLeadFields.state,
              "leadRole" : mktoLeadFields.leadRole,
              "gDPRMarketingOptInBP" : mktoLeadFields.gDPRMarketingOptInBP
            };
            mktoForm.vals(prefillFields);
          }
        }
      }
    });
  });

}
