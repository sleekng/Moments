<template>
<div class="bg-primaryBackground">
    <!-- Header section -->
    <section class=" w-full">
        <div class=" h-[100vh] md:h-[920px] lg:h-[100vh] overflow-hidden relative w-full  ">
            <!-- Header with Login and Signup buttons -->
            <header class="flex justify-between items-center p-4">
                <img src="/assets/Logo-1.svg" alt="Logo" class="w-28 h-10">
                <div class="flex space-x-4">
                    <RouterLink to="/Login" class="bg-secondaryColor text-white py-2 px-4 sm:px-8 rounded-full text-sm sm:text-base">Log in</RouterLink>
                    <RouterLink to="/create-option3gt" class="bg-primaryColor text-white py-2 px-4 sm:px-8 rounded-full text-sm sm:text-base">Sign up</RouterLink>
                </div>
            </header>

            <div class="flex flex-col items-center py-32">
                <div class="text-center max-w-xl mx-auto mb-10 space-y-4 relative">
                    <h1 class="text-4xl md:text-6xl font-semibold text-gray-900  leading-none relative">
                        <img class=" particle-7" src="/assets/balloon-svgrepo-com1.svg" alt="particle-7">
                        Make Every Moment Memorable
                        <span class="text-primaryColor">.</span>
                    </h1>
                    <p class="text-base md:text-lg text-gray-600">Connect with loved ones through heartfelt wishes and gifts. Create, share, and discover wishlists to make your dreams come true.</p>
                </div>
                <button class="bg-primaryColor text-white font-medium text-lg py-3 px-10 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105">
                    <span>Start wishing now</span>
                    <img src="/assets/frame-1618868561.svg" alt="Arrow Icon" class="w-4 h-auto" />
                </button>

                <div class="relative w-full max-w-4xl mx-auto mt-20 flex justify-center">
                    <!-- Rotated Images Section -->
                    <div class="relative w-[867.52px] h-[867.52px] flex justify-center">
                        <img src="/assets/home-rotate.png" alt="Image 1" class="absolute smooth-rotate" />
                    </div>
                </div>
            </div>

            <img src="/assets/frame-1618868348.svg" alt="Background Decor" class="absolute -bottom-7 md:-bottom-20 left-1/2 z-50 transform -translate-x-1/2 w-full" />
            <!-- Particles -->
            <div>
                <img class=" particle-1 z-50" src="/assets/Star1.svg" alt="particle-1">
                <img class=" particle-2 z-50" src="/assets/Star4.svg" alt="particle-2">
                <img class=" particle-3 z-50" src="/assets/Star3.svg" alt="particle-3">
                <img class=" particle-4 z-50" src="/assets/Ellipse2.svg" alt="particle-4">
                <img class=" particle-5 z-50" src="/assets/Ellipse1.svg" alt="particle-5">
                <img class=" particle-6 z-50" src="/assets/Star5.svg" alt="particle-6">
            </div>
        </div>
    </section>

    <section class="py-32 px-4 md:px-32">
        <div class="text-center max-w-full mx-auto mb-10 space-y-4">
            <h2 class="text-5xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Explore endless <br> possibilities <span class="text-pink-500">.</span>
            </h2>
        </div>

        <!-- Grid with 12 columns layout -->
        <div class="md:px-24 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-5 mt-8  md:auto-rows-fr">
                <!-- Tag Friends Section -->
                <div class="bg-[#9CB2FC] p-8 md:p-8 rounded-2xl flex flex-col w-full items-center col-span-1  lg:col-span-3">
                    <div class="flex-grow">
                        <div class="space-y-4">
                            <h2 class="text-2xl font-semibold text-gray-900">Tag Friends</h2>
                            <p class="text-gray-900">Value thoughtful gift-giving and seek a convenient platform to</p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 relative w-full h-full">
                        <img src="/assets/female-memojis-3.svg" alt="Profile" class="absolute w-11 h-11" style="top:83px; left:110px;">
                        <img src="/assets/star-4-2.svg" alt="Star" class="absolute w-16 h-16" style="top:75.42px; left:101.26px;">
                    </div>
                </div>

                <!-- Categorize Wishlist Section -->
                <div class="bg-[#C4B1E8] p-8 md:p-8 rounded-2xl col-span-1  lg:col-span-6">
                    <div class="flex flex-row md:flex-col lg:flex-row items-center">
                        <div class="space-y-4">
                            <h2 class="text-2xl font-semibold text-gray-900">Categorize Wishlist</h2>
                            <p class="text-gray-900  w-4/5">Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                        </div>
                        <div class="h-full">
                            <img src="/assets/2102-i-402-030-birthday-flat-background-1.svg" alt="Send Gifts" class=" w-80 h-auto" />
                        </div>
                    </div>
                </div>

                <!-- Send Gifts Section -->
                <div class="bg-[#F7A374] text-[#602606] px-8 pt-8 md:px-8 lg:py-0 rounded-2xl col-span-1 lg:col-span-6 lg:row-start-2 h-full">
                    <div class="flex flex-col md:flex-row md:items-center h-full">
                        <div class="flex-grow flex items-center  h-full">
                            <div class="space-y-4">
                                <h2 class="text-2xl font-semibold">Send Gifts</h2>
                                <p>Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-end items-center h-full pt-2">
                            <img src="/assets/2102-i-402-030-birthday-flat-background-1.svg" alt="Send Gifts" class=" md:w-[680px] w-64 h-auto " />
                        </div>
                    </div>
                </div>

                <!-- Reminder Section -->
                <div class="bg-[#72C6EB] p-8 rounded-2xl col-span-1  lg:col-span-3 lg:row-start-2">
                    <div class="flex flex-col items-end">
                    </div>
                    <div class="space-y-4">
                        <h2 class="text-2xl font-semibold text-gray-900">Reminder</h2>
                        <p class="text-gray-700">Value thoughtful gift-giving and seek a convenient platform to</p>
                    </div>
                    <img src="/assets/Notifiction2.svg" alt="Track Wishes" class="w-64 h-auto" />
                </div>

                <!-- Track Wishes Section -->
                <div class="bg-[#FBA4C1] text-[#69112E] overflow-hidden  rounded-2xl col-span-1  lg:col-span-3 lg:row-span-2 ">
                    <div class="flex flex-col items-end pb-8">
                        <div class="flex-grow p-8">
                            <div class="space-y-4">
                                <h2 class="text-2xl font-semibold ">Track Wishes</h2>
                                <p class="">Value thoughtful gift-giving and seek a convenient platform to share and discover gift ideas</p>
                            </div>
                        </div>
                        <img src="/assets/Notification.svg" alt="Track Wishes" class="w-64 h-auto" />
                        <img src="/assets/2306-i-402-030-f-m-004-c-9-people-with-boxes-flat-background-1.svg" alt="Track Wishes" class="w-64 h-auto" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main section containing multiple flexbox layouts with custom spacing -->
    <section class="flex flex-col px-4 space-y-8">

        <!-- Title Section with centered heading -->
        <div class="text-center max-w-full mx-auto mb-10 space-y-4">
            <h2 class="text-5xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Gift giving made easy.<span class="text-pink-500">.</span>
            </h2>
        </div>

        <!-- Step 1: Create Your Profile -->
        <div class="bg-[#dcd3f0] shadow-xl card sticky top-1 md:top-10 p-10 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
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
                <img src="/assets/frame-1618868558.svg" alt="Profile Image" class="w-full max-w-xl mx-auto md:mx-0">
            </div>
        </div>

        <!-- Step 2: Curate Your Wishlists -->
        <div class="bg-[#EEF5CC] card sticky top-20 md:top-20 p-10 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
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
                <img src="/assets/Frame-11618868558.svg" alt="Profile Image" class="w-full max-w-xl mx-auto md:mx-0">
            </div>
        </div>

        <!-- Step 3: Explore & Discover -->
        <div class="bg-[#E4EBFF] card sticky top-40 md:top-32 p-10 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
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
                <img src="/assets/Frame-161886855.svg" alt="Profile Image" class="w-full max-w-xl mx-auto md:mx-0">
            </div>
        </div>

        <!-- Step 4: Connect & Share -->
        <div class="bg-[#FADDFC] card sticky top-1 md:top-40 p-10 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
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
                <img src="/assets/Frame-618868558.svg" alt="Profile Image" class="w-full max-w-xl mx-auto md:mx-0">
            </div>
        </div>

        <!-- Final Call to Action: Join the Community -->
        <div class="bg-[#FCEEE9] card sticky top-10 md:top-80 p-10 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 container mx-auto md:px-24">
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
                <button class="bg-primaryColor text-white font-medium text-lg py-3 px-10 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105 max-w-fit">
                    <span>Start wishing now</span>
                    <img src="/assets/frame-1618868561.svg" alt="Arrow Icon" class="w-4 h-auto" />
                </button>

            </div>
            <!-- Image corresponding to the final step -->
            <div class="flex-shrink-0">
                <img src="/assets/Frame-18868558.svg" alt="Profile Image" class="w-full max-w-xl mx-auto md:mx-0">
            </div>
        </div>
    </section>

    <footer class="relative  py-12 px-8 flex flex-col md:flex-row   mt-10 justify-between h-[400px] items-center" style=" background-image: url('/assets/footer.svg'); background-repeat: no-repeat; background-size: cover;">
        <div class="container mx-auto  ">

            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 relative">
                <div class="flex flex-col space-y-6 ">
                    <img src="/assets/logo.svg" alt="Moments Logo" class="w-32 h-auto">
                    <p class="text-base md:text-lg text-gray-700 w-full">Where wishlists come alive!</p>
                    <a href="#" class="flex items-center text-base md:text-lg text-gray-600">
                        Privacy policy <img src="/assets/arrow-right.svg" alt="Arrow" class="ml-2 w-4 h-4">
                    </a>
                </div>
                <div class="relative w-full flex justify-center mt-8 lg:mt-0 ">
                    <div class="">
                        <img src="/assets/social-4.svg" class="social-4 social w-auto" alt="">
                        <img src="/assets/social-3.svg" class="social-3 social w-auto" alt="">
                        <img src="/assets/social-2.svg" class="social-2 social w-auto" alt="">
                        <img src="/assets/social-1.svg" class="social-1 social w-auto" alt="">
                    </div>
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
    font-size: 64px;
    letter-spacing: -0.02em;
}

p {
    font-family: 'Mukta', sans-serif;
    font-size: 20px;
}

button span {
    font-family: 'Mukta', sans-serif;
    font-size: 20px;
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
    width: 53px;
    height: 49.6px;
    top: 211px;
    left: 1613px;
    gap: 0px;
    opacity: 0px;
    position: absolute;

}

.particle-2 {
    width: 96px;
    height: 96px;
    top: 506px;
    left: 1458px;
    gap: 0px;
    opacity: 0px;
    position: absolute;

}

.particle-3 {
    width: 90px;
    height: 90px;
    top: 156px;
    left: 350px;
    gap: 0px;
    opacity: 0px;

    position: absolute;

}

.particle-4 {
    width: 16px;
    height: 16px;
    top: 476px;
    left: 1304px;
    gap: 0px;
    opacity: 0px;
    position: absolute;

}

.particle-5 {
    width: 16px;
    height: 16px;
    top: 314px;
    left: 544px;
    gap: 0px;
    opacity: 0px;

    position: absolute;

}

.particle-6 {
    width: 321px;
    height: 321px;
    top: 643px;
    left: 0px;
    gap: 0px;
    opacity: 0px;
    position: absolute;
}

.particle-7 {
    width: 56px;
    height: 56px;
    top: -40px;
    right: 1px;
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

    top: -53.7px;
    left: 1202px;
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
        top: 543px;
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
</style>
