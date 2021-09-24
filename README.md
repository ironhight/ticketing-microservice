# ticketing-microservice

- kubectl describe secret jwt-secret
- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
- kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=sk_test_51JC4GQIrgTVFaaDnEi2ln0iuAMsv4IPx3L8yGoN9Cw91RA8Hgjdg7xg1d4krBMUcEKBrjyyyB1Y7lydhuOBeK3ey00727DfWaP

# Using GC to build
- config on google cloud
---------------------------------------------------------
1. Create project <ticketing-dev>
2. Kubernetes Engine -> Cluster -> Create Cluster
3. Config cluster name <ticketing-dev>. Location type: <Zonal>. Zone <us-cental1-c>. Master version: <Static version>, chọn max version. Number of Node: <3>. Machine: <small>
3. Install GC SDK. `gcloud auth login`
--------------------------------------------------------
- Trong Source Code:
- `gcloud init`: <Reinstall this configuration>
- login account
- Select Id project. ProjectId lấy trên GC Account
- Select Location giống với *Cluster đã tạo*
- Done
- `gcloud container clusters get-credentials <cluster-name>`
- switch kubernetes in docker destop setting to service deploy gc
- update image name trong skaffold config sang dang: us.gcr.io/<projectId>/<name-image>
- Create load balancer: Copy từ này và run: `https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke`. Xong đi vào Network service -> Load balancer trên GC account sẽ thấy nó tạo. Copy IP và change trong file hosts: <34.66.119.150 ticketing.dev> 
- run `skaffold deploy`. Nếu vào trang bị private thì `thisisunsafe`