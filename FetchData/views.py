# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json

# @csrf_exempt
# def receive_data(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         print("called---------------", data)
#         # Process your data here
#         return JsonResponse({'status': 'success', 'data': data})
#     else:
#         return JsonResponse({'status': 'error', 'message': 'Only POST method is accepted.'})


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def receive_data(request):
    if request.method == 'POST':
        # Access the file from the request.FILES
        file = request.FILES.get('resume')
        if file:
            # Here you can save the file or do other processing
            print("File received: ", file.size)
            # Return some information about the file, for example:
            return JsonResponse({'status': 'success', 'file_name': file.name, 'file_size': file.size})
        else:
            return JsonResponse({'status': 'error', 'message': 'No file received.'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST method is accepted.'})
