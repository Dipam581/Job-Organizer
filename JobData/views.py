from django.http import HttpResponse

def submit_form(request):
  if request.method == "POST":
    form_data = request.POST
    print("form_data-", form_data)
    return HttpResponse("Success!")
  else:
    return HttpResponse("Method not allowed")