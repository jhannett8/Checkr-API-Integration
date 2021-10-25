 $(function () {
        $("#candidate-submit").click(function (e) {
          var candidateData = {
            first_name: $("#field_qh4icy").val(),
            last_name: $("#field_ocfup1").val(),
            email: $("#field_29yf4d").val(),
          };

          const sendHttpRequest = (method, url, data, key, type) => {
            const promise = new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.open(method, url);

              if (data) {
                if (key) {
                  if (type == "invitation") {
                    xhr.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    );
                  }
                  if (type == "candidate") {
                    xhr.setRequestHeader("Content-Type", "application/json");
                  }
                  xhr.setRequestHeader("X-User-Agent", "Checkr.2.0.0.js");
                  xhr.setRequestHeader("Authorization", "Basic " + btoa(key));
                }
              }

              xhr.onload = () => {
                if (xhr.status >= 400) {
                  reject(xhr.response);
                } else {
                  resolve(xhr.response);
                }
              };

              xhr.onerror = () => {
                reject(xhr.onerror);
              };

              xhr.send(JSON.stringify(data));
            });
            return promise;
          };

          const sendCandidateData = () => {
            sendHttpRequest(
              "POST",
              "https://api.checkr.com/js/candidates",
              candidateData,
              //"756d5722f9aa0284900bca42b24616ddd296c7ba",
              "70d0c1af5dd71e5fc3459a402fd867727f2b4073",
              "candidate"
            ).then((responseData) => {
              var jsonResponse = JSON.parse(responseData);
              var candidate_id = jsonResponse.id;
              if (candidate_id) {
                console.log(candidate_id);
                callServerSideFunction(candidate_id);
              }
            });
          };

          const callServerSideFunction = (id) => {
            const data = {
              candidateId: id,
              action: "rest_api_init",
            };
            $.ajax({
              method: "GET",
              url: "https://popuprideshare.com/wp-json/checkr/v1/invitation",
              data: data,
            });
          };

          sendCandidateData();
        });
      });