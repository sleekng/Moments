<template>
<div class="bg-primaryBackground">
    <!-- Header section -->
    <section class=" w-full">
        <div class="  overflow-hidden relative w-full top-screen h-[800px] sm:h-screen">
            
            <!-- Header with Login and Signup buttons -->
            <header class="flex justify-between items-center p-4 lg:px-8">
                <img src="/assets/Logo-1.svg" alt="Logo" class="w-24 h-10">
                <div class="flex space-x-4">
                    <RouterLink to="/Login" class="bg-secondaryColor hover:shadow-lg text-white py-2 px-4 sm:px-4 rounded-full text-sm sm:text-base">Log in</RouterLink>
                    <RouterLink to="/create-option" class="bg-primaryColor hover:shadow-lg text-white py-2 px-4 sm:px-4 rounded-full text-sm sm:text-base">Sign up</RouterLink>
                </div>
            </header>

            <div class="flex flex-col items-center  py-28 md:py-28 2xl:py-10 px-4">
                <div class="text-center scale-105 flex justify-center flex-col items-center  mx-auto mb-4 space-y-2 relative">
                    <h1 class="2xl:text-4xl max-w-sm sm:max-w-lg text-[64px]  font-semibold text-gray-900  leading-none relative">
                        <img class=" particle-7" src="/assets/balloon-svgrepo-com1.svg" alt="particle-7">
                        Make Every Moment Memorable
                        <span class="text-primaryColor absolute">.</span>
                    </h1>
                    <p class="text-base  max-w-xl lg:text-[14px] text-gray-600">Connect with loved ones through heartfelt wishes and gifts. Create, share, and discover wishlists to make your dreams come true.</p>
                </div>
                <RouterLink to="/Login" class="bg-primaryColor text-white font-medium  py-2 lg:py-3 px-12 rounded-full flex items-center space-x-2  transition-all transform hover:scale-105">
                    <span class="">Start wishing now</span>
                    <img src="/assets/frame-1618868561.svg" alt="Arrow Icon" class="w-4 h-auto" />
                </RouterLink>

                <div class="relative w-full max-w-4xl mx-auto mt-10 lg:mt-8 flex justify-center overflow-hidden">
                    <!-- Rotated Images Section -->
                    <div class="relative w-full max-w-[90vw] h-[24vh] lg:h-[50vh] flex justify-center items-center overflow-hidden">
                        <img src="/assets/rotatery-1.png" alt="Image 1" class="absolute smooth-rotate w-full h-auto max-w-[700px] top-10 lg:top-12 transform -translate-y-1/2" />
                    </div>
                    <img src="/assets/frame-1618868348.svg" alt="Background Decor" class="absolute inset-x-0 -bottom-8 sm:-bottom-8 lg:-bottom-2 xl:-bottom-10 left-1/2 z-50 transform -translate-x-1/2 w-full" />
                </div>
            </div>

            <!-- Particles -->
            <div>
                <img class=" particle-1 z-50" src="/assets/Star1.svg" alt="particle-1">
                <img class=" particle-2 top-[356px] left-[1058px] 2xl:left-[1208px]  z-50" src="/assets/Star4.svg" alt="particle-2">
                <img class=" particle-3 z-50" src="/assets/Star3.svg" alt="particle-3">
                <img class=" particle-4 top-[305px] right-[369px] 2xl:right-[469px] z-50" src="/assets/Ellipse2.svg" alt="particle-4">
                <img class=" particle-5 z-50" src="/assets/Ellipse1.svg" alt="particle-5">
                <img class=" particle-6 2xl:top-[360px] top-[300px] z-50" src="/assets/Star5.svg" alt="particle-6">
            </div>
        </div>
    </section>

    <section class="lg:py-24 px-4 md:px-24">
        <div class="text-center max-w-full mx-auto mb-10 space-y-4">
            <h2 class="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Explore endless <br> possibilities <span class="text-pink-500">.</span>
            </h2>
        </div>

        <!-- Grid with 12 columns layout -->
        <div class=" mx-auto ">
            <div class="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 mt-8  md:auto-rows-fr">
                <!-- Tag Friends Section -->
                <div class="bg-[#9CB2FC] p-8 md:p-4 rounded-2xl flex flex-col w-full items-center col-span-1  lg:col-span-3 group">

                    <div class="flex-grow lg:hidden block">
                        <div class="space-y-1">
                            <h2 class="text-lg font-semibold text-gray-900">Tag Friends</h2>
                            <p class="text-gray-900">Value thoughtful gift-giving and seek a convenient platform to</p>
                        </div>
                    </div>

                    <div class="flex-shrink-0 relative w-fulltransform transition-transform duration-300 group-hover:scale-105 ">
                        <img src="/assets/tag.png" class=" w-full" alt="Profile">

                    </div>
                    <div class="flex-grow hidden lg:block">
                        <div class="space-y-1">
                            <h2 class="text-lg font-semibold text-gray-900">Tag Friends</h2>
                            <p class="text-gray-900">Value thoughtful gift-giving and seek a convenient platform to</p>
                        </div>
                    </div>

                </div>

                <!-- Categorize Wishlist Section -->
                <div class="bg-[#C4B1E8] p-4 md:p-4 rounded-2xl col-span-1 h-full flex items-center lg:col-span-6 relative overflow-hidden">
                    <div class="flex flex-col lg:flex-row items-center">
                        <div class="space-y-2 lg:w-8/12">
                            <h2 class="text-lg font-semibold text-gray-900">Categorize Wishlist</h2>
                            <p class="text-gray-900 w-4/5">Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                        </div>
                        <div class="flex my-10 h-[150px] w-full lg:w-6/12 pt-4 justify-center lg:justify-start items-center space-y-1 text-center lg:text-left animate-carousel relative">
                            <div class="whitespace-nowrap text-4xl font-bold absolute flex items-center lg:justify-start justify-center">Baby Shower</div>
                            <div class="whitespace-nowrap text-4xl font-bold absolute flex items-center lg:justify-start justify-center">Wedding</div>
                            <div class="whitespace-nowrap text-4xl font-bold absolute flex items-center lg:justify-start justify-center">Birthday</div>
                            <div class="whitespace-nowrap text-4xl font-bold absolute flex items-center lg:justify-start justify-center">Personal</div>
                            <div class="whitespace-nowrap text-4xl font-bold absolute flex items-center lg:justify-start justify-center">Fashion</div>
                            <div class="whitespace-nowrap text-4xl font-bold absolute flex items-center lg:justify-start justify-center">Graduation</div>
                        </div>
                    </div>
                </div>

                <!-- Send Gifts Section -->
                <div class="bg-[#F7A374] text-[#602606] overflow-hidden px-4 md:px-4 lg:py-0 rounded-2xl col-span-1 lg:col-span-6 lg:row-start-2 group">
                    <div class="flex flex-col justify-end md:flex-row md:items-center h-full">
                        <div class="flex-grow flex items-center h-auto">
                            <div class="space-y-1">
                                <h2 class="text-lg font-semibold mt-4">Send Gifts</h2>
                                <p>Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-end items-end h-full pt-2">
                            <img src="/assets/2102-i-402-030-birthday-flat-background-1.svg" alt="Send Gifts" class="md:w-[460px] w-64 h-auto self-center lg:self-end transform transition-transform duration-300 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                <!-- Reminder Section -->
                <div class="bg-[#72C6EB] flex flex-col h-auto space-y-2 p-4 rounded-2xl col-span-1 lg:col-span-3 lg:row-start-2 group">
                    <div class="space-y-1">
                        <h2 class="text-lg font-semibold text-gray-900">Reminder</h2>
                        <p class="text-gray-700">Value thoughtful gift-giving and seek a convenient platform to</p>
                    </div>
                    <img src="/assets/Notifiction2.svg" alt="Track Wishes" class="w-64 h-auto transform transition-transform duration-300 group-hover:scale-105" />
                </div>

                <!-- Track Wishes Section -->
                <div class="bg-[#FBA4C1] text-[#69112E] overflow-hidden rounded-2xl col-span-1 lg:col-span-3 lg:row-span-2 h-auto group">
                    <div class="flex flex-col justify-between items-end space-y-4 pt-10">

                        <div class="flex-grow p-4 lg:hidden block">
                            <div class="space-y-1">
                                <h2 class="text-lg font-semibold ">Track Wishes</h2>
                                <p class="">Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                            </div>
                        </div>

                        <img src="/assets/Notification.svg" alt="Track Wishes" class="w-64 2xl:w-72 h-auto transform transition-transform duration-300 self-center group-hover:scale-105" />
                        <img src="/assets/2306-i-402-030-f-m-004-c-9-people-with-boxes-flat-background-1.svg" alt="Track Wishes" class="lg:w-48 w-52 pb-4 lg:pb-0  h-auto transform transition-transform duration-300 group-hover:scale-105" />
                        <div class="flex-grow p-4 hidden lg:block">
                            <div class="space-y-1">
                                <h2 class="text-lg font-semibold ">Track Wishes</h2>
                                <p class="">Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Main section containing multiple flexbox layouts with custom spacing -->
    <section class="flex flex-col lg:py-12 pt-10  space-y-8 px-4 lg:px-8">

        <!-- Title Section with centered heading -->
        <div class="text-center max-w-full mx-auto mb-4 space-y-4">
            <h2 class="text-5xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Gift giving made easy.<span class="text-pink-500">.</span>
            </h2>
        </div>

        <!-- Step 1: Create Your Profile -->
        <div class="bg-[#dcd3f0]  card sticky top-1 md:top-10 p-4 md:py-2 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
            <!-- Content description section -->
            <div class="flex flex-col md:items-start md:text-left space-y-4 max-w-xl">
                <!-- Numbered step with star icon -->
                <div class="relative w-24 h-24">
                    <img src="/assets/star-4-3.svg" alt="Star Background" class="absolute w-full h-full">
                    <span class="absolute text-white font-medium text-6xl leading-none inset-0 flex items-center justify-center">
                        1
                    </span>
                </div>
                <!-- Step title and description -->
                <h2 class="text-4xl font-semibold text-gray-900">Create Your Profile</h2>
                <p class="text-lg text-gray-600">
                    Start your journey by setting up your personalized profile. Showcase your unique style and interests!
                    Create a fun profile and let your friends know what makes you tick. Don’t forget to upload a fun profile picture—let your personality shine!
                </p>
            </div>
            <!-- Image corresponding to the step -->
            <div class="flex-shrink-0">
                <img src="/assets/frame-1618868558.svg" alt="Profile Image" class="w-full max-w-sm mx-auto md:mx-0">
            </div>
        </div>

        <!-- Step 2: Curate Your Wishlists -->
        <div class="bg-[#EEF5CC] card sticky top-20 md:top-20 p-4 md:py-2 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
            <!-- Content description section -->
            <div class="flex flex-col md:items-start md:text-left space-y-4 max-w-xl">
                <!-- Numbered step with star icon -->
                <div class="relative w-24 h-24">
                    <img src="/assets/star-4-4.svg" alt="Star Background" class="absolute w-full h-full">
                    <span class="absolute text-white font-medium text-6xl leading-none inset-0 flex items-center justify-center">
                        2
                    </span>
                </div>
                <!-- Step title and description -->
                <h2 class="text-4xl font-semibold text-gray-900">Curate Your Wishlists</h2>
                <p class="text-lg text-gray-600">
                    Dream big! <br>
                    Build wishlists for every occasion—birthdays, holidays, or just because. Add items from anywhere on the web or upload your own pics! Make it colorful, add descriptions, and let your wishes be known!
                </p>
            </div>
            <!-- Image corresponding to the step -->
            <div class="flex-shrink-0">
                <img src="/assets/Frame-11618868558.svg" alt="Profile Image" class="w-full max-w-sm mx-auto md:mx-0">
            </div>
        </div>

        <!-- Step 3: Explore & Discover -->
        <div class="bg-[#E4EBFF] card sticky top-40 md:top-32 p-4 md:py-2 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
            <!-- Content description section -->
            <div class="flex flex-col md:items-start md:text-left space-y-4 max-w-xl">
                <!-- Numbered step with star icon -->
                <div class="relative w-24 h-24">
                    <img src="/assets/star-4-5.svg" alt="Star Background" class="absolute w-full h-full">
                    <span class="absolute text-white font-medium text-6xl leading-none inset-0 flex items-center justify-center">
                        3
                    </span>
                </div>
                <!-- Step title and description -->
                <h2 class="text-4xl font-semibold text-gray-900">Explore & Discover</h2>
                <p class="text-lg text-gray-600">
                    Dive into a treasure trove of curated wishlists from other users! Browse curated wishlists from others.
                    Discover trending items, themed collections, or even wishlists from family and friends. The perfect gift is just a click away!
                </p>
            </div>
            <!-- Image corresponding to the step -->
            <div class="flex-shrink-0">
                <img src="/assets/Frame-161886855.svg" alt="Profile Image" class="w-full max-w-sm mx-auto md:mx-0">
            </div>
        </div>

        <!-- Step 4: Connect & Share -->
        <div class="bg-[#FADDFC] card sticky top-1 md:top-44 p-4 md:py-2 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
            <!-- Content description section -->
            <div class="flex flex-col md:items-start md:text-left space-y-4 max-w-xl">
                <!-- Numbered step with star icon -->
                <div class="relative w-24 h-24">
                    <img src="/assets/star-4-6.svg" alt="Star Background" class="absolute w-full h-full">
                    <span class="absolute text-white font-medium text-6xl leading-none inset-0 flex items-center justify-center">
                        4
                    </span>
                </div>
                <!-- Step title and description -->
                <h2 class="text-4xl font-semibold text-gray-900">Connect & Share</h2>
                <p class="text-lg text-gray-600">
                    Here’s where the magic happens! <br>
                    Connect with friends, family, and fellow wish whisperers and gift enthusiasts. Follow their profiles to stay updated on their latest wishes.
                    Share your wishlists via social media or directly through Moment Hub, and let the gift-giving conversations begin!
                </p>
            </div>
            <!-- Image corresponding to the step -->
            <div class="flex-shrink-0">
                <img src="/assets/Frame-618868558.svg" alt="Profile Image" class="w-full max-w-sm mx-auto md:mx-0">
            </div>
        </div>

        <!-- Final Call to Action: Join the Community -->
        <div class="bg-[#FCEEE9] card sticky top-10 md:top-80 p-4 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
            <!-- Content description section -->
            <div class="flex flex-col md:items-start md:text-left space-y-4 max-w-xl">
                <!-- Custom star with an image instead of a number -->
                <div class="relative w-24 h-24">
                    <img src="/assets/star-4-7.svg" alt="Star Background" class="absolute w-full h-full">
                    <span class="absolute text-white font-medium text-6xl leading-none inset-0 flex items-center justify-center">
                        <img src="/assets/star-4-8.png" class="w-16" alt="">
                    </span>
                </div>
                <!-- Final step title and description -->
                <h2 class="text-4xl font-semibold text-gray-900">Join the Moment Hub Community!</h2>
                <p class="text-lg text-gray-600">
                    Are you ready to elevate your wishlist game? Join Moment Hub today and become part of a vibrant community where sharing, discovering, and gifting. Let’s make every moment a celebration!
                </p>
                <RouterLink to="/Login" class="bg-primaryColor text-white font-medium text-lg py-3 px-10 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105 max-w-fit">
                    <span>Start wishing now</span>
                    <img src="/assets/frame-1618868561.svg" alt="Arrow Icon" class="w-4 h-auto" />
                </RouterLink>

            </div>
            <!-- Image corresponding to the final step -->
            <div class="flex-shrink-0">
                <img src="/assets/Frame-18868558.svg" alt="Profile Image" class="w-full max-w-sm mx-auto md:mx-0">
            </div>
        </div>
    </section>

   <!--  <footer class="relative  py-12 px-8 flex flex-col md:flex-row   mt-10 justify-between h-[400px] items-center" style=" background-image: url('/assets/footer.svg'); background-repeat: no-repeat; background-size: cover;">
        <div class="container mx-auto  ">

            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 relative">
                <div class="flex flex-col space-y-6 ">
                    <img src="/assets/logo.svg" alt="Moments Logo" class="w-32 h-auto">
                    <p class="text-base md:text-lg text-gray-700 w-full">Where wishlists come alive!</p>
                    <a href="#" class="flex items-center text-base md:text-lg text-gray-600">
                        Privacy policy <img src="/assets/arrow-right.svg" alt="Arrow" class="ml-2 w-4 h-4">
                    </a>
                </div>
                <div class="relative w-full flex justify-center mt-8 lg:mt-0 scale-75 2xl:scale-90 ">
                    <div class="">
                        <a class=" " href="#"> <img src="/assets/social-4.svg" class="social-4 social transition-all hover:scale-125 ease-in-out  w-auto" alt=""></a>
                        <a class=" " href="#"><img src="/assets/social-3.svg" class="social-3 social transition-all hover:scale-125 ease-in-out  w-auto" alt=""></a>
                        <a class=" " href="#"><img src="/assets/social-2.svg" class="social-2 social transition-all hover:scale-125 ease-in-out   -top-[99.7px] left-[1159px] 2xl:-top-[53.7px] 2xl:left-[1202px] w-auto " alt=""></a>
                        <a class=" " href="#"><img src="/assets/social-1.svg" class="social-1 social transition-all hover:scale-125 ease-in-out  w-auto" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </footer> -->

    <footer class="relative lg:px-60 px-4 mt-10 py-10 h-[400px] items-center bg-[url('/assets/footer-bg.svg')] bg-no-repeat bg-cover">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <!-- Left Section -->
        <div class="flex bg-white w-full h-[327px] p-8 col-span-4 justify-between rounded-[32px] flex-col items-center sm:items-start space-y-2">
            <div class="flex flex-col space-y-4">
                <div class="flex">
                    <img src="/assets/logo.svg" alt="Moments Logo" class="w-44" />
                </div>
                <a href="/privacy-policy" class="text-xl border-b border-black pb-2 font-bold text-[#240328]">Privacy policy →</a>
            </div>
            <p class="text-xs text-[#240328]">© 2024 All Rights Reserved. Moments Hub</p>
        </div>

        <!-- Center Section -->
        <div class="flex bg-white w-full h-[327px] p-8 col-span-5 justify-center rounded-[32px] flex-col items-center sm:items-start space-y-2">
            <span class="text-[62px] leading-[60px] font-black text-[#240328]">Where wishlists come alive!</span>
        </div>

        <!-- Right Section -->
        <div class="flex bg-white w-full h-[327px] p-8 justify-center col-span-3 rounded-[32px] flex-col items-center space-y-8">
            <div class="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-8">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook text-gray-800 text-3xl hover:text-gray-600"></i>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-x-twitter text-gray-800 text-3xl hover:text-gray-600"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram text-gray-800 text-3xl hover:text-gray-600"></i>
                </a>
            </div>
        </div>
    </div>
</footer>

</div>
</template>

<script>
export default {
    name: 'HeroSection',

};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600&display=swap";

h1 {
    font-family: 'Mukta', sans-serif;
    font-size: 46px;
    letter-spacing: -0.02em;
}

p {
    font-family: 'Mukta', sans-serif;
    font-size: 16px;
}

button span {
    font-family: 'Mukta', sans-serif;
    font-size: 16px;
}

.smooth-rotate {
    animation: rotate-clockwise 40s linear infinite;
    animation-timing-function: linear;
    /* Ensures the speed is consistent */
}

@keyframes rotate-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.particle-1 {
    width: 32px;
    height: 49.6px;
    top: 130px;
    left: 1170px;
    gap: 0px;
    opacity: 0px;
    position: absolute;

}

.particle-2 {
    width: 60px;
    height: 60px;

    gap: 0px;
    opacity: 0px;
    position: absolute;

}

.particle-3 {
    width: 60px;
    height: 60px;
    top: 129px;
    left: 90px;
    gap: 0px;
    opacity: 0px;

    position: absolute;

}

.particle-4 {
    width: 10px;
    height: 10px;

    gap: 0px;
    opacity: 0px;
    position: absolute;

}

.particle-5 {
    width: 10px;
    height: 10px;
    top: 200px;
    left: 246px;
    gap: 0px;
    opacity: 0px;

    position: absolute;

}

.particle-6 {
    width: 100px;
    height: 321px;

    left: 0px;
    gap: 0px;
    opacity: 0px;
    position: absolute;
}

.particle-7 {
    width: 56px;
    height: 56px;
    top: -40px;
    right: 24px;
    gap: 0px;
    opacity: 0px;

    position: absolute;
}

.social-1 {

    position: absolute;
    top: -173.2px;
    left: 716px;

}

.social-2 {

    position: absolute;
}

.social-3 {
    top: 10.8px;
    left: 875px;
    padding: 10px 32px 10px 32px;
    position: absolute;
}

.social-4 {

    top: -31.2px;
    left: 468px;
    position: absolute;
}

@media (orientation: portrait) {

    h1 {
        font-family: 'Mukta', sans-serif;

        letter-spacing: -0.02em;
    }

    .particle-3 {
        width: 40px;
        height: 90px;
        top: 73px;
        left: 29px;
        gap: 0px;
        opacity: 0px;
        position: absolute;
    }

    .particle-5 {
        width: 6px;
        height: 16px;
        top: 180px;
        left: 54px;
        gap: 0px;
        opacity: 0px;
        position: absolute;
    }

    .particle-1 {
        width: 80px;
        height: 16px;
        top: 300px;
        left: 350px;
        gap: 0px;
        opacity: 0px;
        position: absolute;
    }

    .particle-6 {
        width: 40px;
        height: 321px;
        top: 420px;
        left: 0px;
        gap: 0px;
        opacity: 0px;
        position: absolute;
    }

    .particle-2 {
        width: 40px;
        height: 96px;
        top: 590px;
        left: 350px;
        gap: 0px;
        opacity: 0px;
        position: absolute;

    }

    .particle-4 {
        width: 6px;
        height: 96px;
        top: 540px;
        left: 320px;
        gap: 0px;
        opacity: 0px;
        position: absolute;

    }

    .smooth-rotate {
        max-width: 76%;
    }

    .social-1 {
        position: absolute;
        top: 30.2px;
        left: 120px;

    }

    .social-2 {

        top: 80.7px;
        left: 250px;
        position: absolute;
    }

    .social-3 {
        top: 120.8px;
        left: 100px;
        width: 45% !important;
        position: absolute;
    }

    .social-4 {

        top: 80.2px;
        left: 8px;
        position: absolute;
    }

    .social {
        width: 30%;
        margin-top: -40px;
        margin-left: -20px;
    }

}

@keyframes carousel {
    0% {
        transform: translateY(500%);
        opacity: 0;
    }

    25% {
        transform: translateY(500%);
        opacity: 0.2;
    }

    50% {
        transform: translateY(25%);
        opacity: 1;
    }

    100% {
        transform: translateY(-300%);
        opacity: 0;
    }
}

.animate-carousel div {
    animation: carousel 6s linear infinite;
    animation-delay: 2s;
    opacity: 0;
}

.animate-carousel div:nth-child(1) {
    animation-delay: 0s;
}

.animate-carousel div:nth-child(2) {
    animation-delay: 1s;
}

.animate-carousel div:nth-child(3) {
    animation-delay: 2s;
}

.animate-carousel div:nth-child(4) {
    animation-delay: 3s;
}

.animate-carousel div:nth-child(5) {
    animation-delay: 4s;
}

.animate-carousel div:nth-child(6) {
    animation-delay: 5s;
}
</style>
