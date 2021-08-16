export default function (ctx) {

    if (ctx.route.fullPath == "/account/success") ctx.redirect(302, "/account/login"); 

}

