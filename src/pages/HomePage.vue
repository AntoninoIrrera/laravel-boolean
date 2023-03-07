<script>
export default {
  name: 'HomePage'
}
</script>

<template>
  <div class="myWelcome">
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center myBg">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-1 fw-normal fw-bold white">LIBRARY</h1>
                <p class="lead fw-normal white">Welcome to our library</p>
                
            </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 p-3">

                    
                </div>
                <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                    <img src="https://d2i0w0hu6hvxgc.cloudfront.net/B019PIOJY0/e121106a/cover.jpeg" alt=""
                        style="width: 100%;">
                </div>
            </div>
            <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 py-3">

                </div>
                <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                    <img src="https://m.media-amazon.com/images/I/81ZhkgxEkFL.jpg" alt="" style="width: 100%;">
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
  
.myWelcome {
  background-image: url('https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg?quality=75&auto=webp')
}

.white{
  color: white;
}
</style>