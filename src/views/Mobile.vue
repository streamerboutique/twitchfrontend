<template>
    <div class="home" id="main">
        <header class="major ">
            <h2>Store Title</h2>
        </header>
        <carousel3d ref="mycarousel"
                    :on-slide-change="onSlideChanged"
                    :perspective="180"

                    :autoplayTimeout="15000"
                    :display="1"
                    :autoplay="ShouldAutoPlay"
                    :autoplayHoverPause="true"
                    :height="GetHeight()"
                    :width="MaxWidth"

        >
            <slide v-for="(Slide,index) in Slides" :index="index"
                   :key="index">

                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">

                    <img @click="SlideClicked" :data-index="index" class="Image"
                         :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
                         :src="Slide.images[0].src">


                </template>

            </slide>

        </carousel3d>
        <div class="col-12 align-center">
            <h2><a target="_blank" :href="`https://streamer.boutique/redirectstore={{StoreUrl}}&product=${CurrentSlide.handle}`">
                {{CurrentSlide.title}} {{GetPrice(CurrentSlide)}}</a>
            </h2>
        </div>
        <ul class="actions ">
            <li>
                <button @click="Prev">Prev</button>
            </li>
            <li>
                <button @click="NextSlide">Next</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    import LogToTwitch from "@/shared/TwitchLogger";

    @Component({
        components: {},
    })
    export default class Mobile extends Vue {
        StoreUrl = 'https://streamer-boutique-dev.myshopify.com';

        onSlideChanged(indx) {
            this.CurrentIndex = indx;
        }


        get CurrentSlide() {
            return this.Slides[this.CurrentIndex]
        }

        get Slides() {
            return this.products.filter(A => A.images.length > 0 && A.variants.length > 0);
        }

        get MaxWidth() {
            return 290;
        }

        LastClick = +(new Date())

        get ShouldAutoPlay() {
            const now = +(new Date());
            if (now - this.LastClick > 15000) {
                return true;
            }
            return false;
        }

        Prev() {
            this.LastClick = +(new Date())
            if (this.CurrentIndex > 0) {
                this.$refs.mycarousel.goSlide(this.CurrentIndex - 1);
            } else {
                this.$refs.mycarousel.goSlide(this.Slides.length - 1);
            }
        }

        GetPrice(Product) {
            Product.variants[0].price;
        }

        NextSlide() {
            this.LastClick = +(new Date())
            if (this.CurrentIndex >= this.Slides.length - 1) {
                this.$refs.mycarousel.goSlide(0);
            } else {
                this.$refs.mycarousel.goSlide(this.CurrentIndex + 1);
            }
        }

        GetHeight() {
            var Image = this.Slides[this.CurrentIndex].images[0];
            var WidthRatio = this.MaxWidth / Image.width;
            return Image.height * WidthRatio;
        }

        CurrentIndex = 0;

        SlideClicked(e) {
            alert("hi");
            console.log(this.CurrentIndex);
        }


        products = [{
            "title": "Bomber Jacket",
            "bodyHtml": "Combining durability and style, this bomber jacket is a great addition to any wardrobe. It’s a real statement piece that makes even the simplest outfit look fashionable.<br> <br> • 60% cotton, 40% polyester fleece<br> • 7.4 oz/yd² (250.9 g/m²)<br> • Ribbed crew neck, waistband, and cuffs<br> • Raglan sleeves<br> • Slash pockets<br> • YKK zipper\n<p><strong class=\"size-guide-title\">Size guide</strong></p>\n<div class=\"table-responsive dynamic\" data-unit-system=\"imperial\">\n<table cellpadding=\"5\">\n<tbody>\n<tr>\n<td> </td>\n<td><strong>S</strong></td>\n<td><strong>M</strong></td>\n<td><strong>L</strong></td>\n<td><strong>XL</strong></td>\n<td><strong>2XL</strong></td>\n</tr>\n<tr>\n<td><strong>Length (inches)</strong></td>\n<td>27</td>\n<td>28</td>\n<td>29</td>\n<td>29 ¾</td>\n<td>30 ¼</td>\n</tr>\n<tr>\n<td><strong>Chest (inches)</strong></td>\n<td>17 ⅞</td>\n<td>19 ⅜</td>\n<td>20 ⅞</td>\n<td>24 ⅜</td>\n<td>26 ⅜</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"pf-customisable-product\" style=\"display: none;\"></div>\n",
            "createdAt": "\/Date(1572274360000-0400)\/",
            "updatedAt": "\/Date(1572275706000-0400)\/",
            "publishedAt": "\/Date(1572274365000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "bomber-jacket",
            "templateSuffix": "",
            "publishedScope": "web",
            "tags": "Jacket",
            "variants": [{
                "productId": 4320724353071,
                "title": "S",
                "sku": "6475259",
                "position": 1,
                "grams": 204,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32546996256815,
                "price": 55.00,
                "option1": "S",
                "createdAt": "\/Date(1572274361000-0400)\/",
                "updatedAt": "\/Date(1572274363000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322670735407,
                "weight": 7.2,
                "weightUnit": "oz",
                "id": 31048515092527,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048515092527"
            }, {
                "productId": 4320724353071,
                "title": "M",
                "sku": "2077818",
                "position": 2,
                "grams": 210,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32546996289583,
                "price": 55.00,
                "option1": "M",
                "createdAt": "\/Date(1572274361000-0400)\/",
                "updatedAt": "\/Date(1572274363000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322670735407,
                "weight": 7.4,
                "weightUnit": "oz",
                "id": 31048515125295,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048515125295"
            }, {
                "productId": 4320724353071,
                "title": "L",
                "sku": "5927183",
                "position": 3,
                "grams": 235,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32546996322351,
                "price": 55.00,
                "option1": "L",
                "createdAt": "\/Date(1572274361000-0400)\/",
                "updatedAt": "\/Date(1572274363000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322670735407,
                "weight": 8.3,
                "weightUnit": "oz",
                "id": 31048515158063,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048515158063"
            }, {
                "productId": 4320724353071,
                "title": "XL",
                "sku": "5677536",
                "position": 4,
                "grams": 244,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32546996355119,
                "price": 55.00,
                "option1": "XL",
                "createdAt": "\/Date(1572274361000-0400)\/",
                "updatedAt": "\/Date(1572274363000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322670735407,
                "weight": 8.6,
                "weightUnit": "oz",
                "id": 31048515190831,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048515190831"
            }, {
                "productId": 4320724353071,
                "title": "2XL",
                "sku": "9256120",
                "position": 5,
                "grams": 266,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32546996387887,
                "price": 58.00,
                "option1": "2XL",
                "createdAt": "\/Date(1572274361000-0400)\/",
                "updatedAt": "\/Date(1572274364000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322670735407,
                "weight": 9.4,
                "weightUnit": "oz",
                "id": 31048515223599,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048515223599"
            }],
            "options": [{
                "productId": 4320724353071,
                "name": "Size",
                "position": 1,
                "values": ["S", "M", "L", "XL", "2XL"],
                "id": 5615281569839
            }],
            "images": [{
                "productId": 4320724353071,
                "position": 1,
                "createdAt": "\/Date(1572274363000-0400)\/",
                "updatedAt": "\/Date(1572274363000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-26eaff70.jpg?v=1572288763",
                "variantIds": [31048515092527, 31048515125295, 31048515158063, 31048515190831, 31048515223599],
                "height": 1000,
                "width": 1000,
                "id": 13322670735407,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322670735407"
            }, {
                "productId": 4320724353071,
                "position": 2,
                "createdAt": "\/Date(1572274364000-0400)\/",
                "updatedAt": "\/Date(1572274364000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-f97aa0e5.jpg?v=1572288764",
                "variantIds": [],
                "height": 1000,
                "width": 1000,
                "id": 13322670768175,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322670768175"
            }],
            "id": 4320724353071,
            "adminGraphQLAPIId": "gid://shopify/Product/4320724353071"
        }, {
            "title": "Cuffed Beanie",
            "bodyHtml": "A snug, form-fitting beanie. It's not only a great head-warming piece but a staple accessory in anyone's wardrobe.<br>\n<br>\n100% Turbo Acrylic<br>\n12\" in length<br>\nHypoallergenic <br>\nUnisex style",
            "createdAt": "\/Date(1572274710000-0400)\/",
            "updatedAt": "\/Date(1572274712000-0400)\/",
            "publishedAt": "\/Date(1572274712000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "cuffed-beanie",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320729563183,
                "title": "Default Title",
                "sku": "7084358",
                "position": 1,
                "grams": 85,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547020963887,
                "price": 19.50,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274710000-0400)\/",
                "updatedAt": "\/Date(1572274711000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322707763247,
                "weight": 3,
                "weightUnit": "oz",
                "id": 31048538193967,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048538193967"
            }],
            "options": [{
                "productId": 4320729563183,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615287402543
            }],
            "images": [{
                "productId": 4320729563183,
                "position": 1,
                "createdAt": "\/Date(1572274711000-0400)\/",
                "updatedAt": "\/Date(1572274711000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-e5e6c5e2.jpg?v=1572289111",
                "variantIds": [31048538193967],
                "height": 1000,
                "width": 1000,
                "id": 13322707763247,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322707763247"
            }],
            "id": 4320729563183,
            "adminGraphQLAPIId": "gid://shopify/Product/4320729563183"
        }, {
            "title": "Dad hat",
            "bodyHtml": "Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.<br>\n<br>\n• 100% chino cotton twill<br>\n• Unstructured, 6-panel, low-profile<br>\n• 3 ⅛” crown<br>\n• Adjustable strap with antique buckle<br>\n• Head circumference: 20 ½” - 21 ⅝” ",
            "createdAt": "\/Date(1572274690000-0400)\/",
            "updatedAt": "\/Date(1572274692000-0400)\/",
            "publishedAt": "\/Date(1572274692000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "dad-hat",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320729038895,
                "title": "Default Title",
                "sku": "4724975",
                "position": 1,
                "grams": 94,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547018932271,
                "price": 22.50,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274690000-0400)\/",
                "updatedAt": "\/Date(1572274692000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322705928239,
                "weight": 3.3,
                "weightUnit": "oz",
                "id": 31048536260655,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048536260655"
            }],
            "options": [{
                "productId": 4320729038895,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615286845487
            }],
            "images": [{
                "productId": 4320729038895,
                "position": 1,
                "createdAt": "\/Date(1572274691000-0400)\/",
                "updatedAt": "\/Date(1572274691000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-09055674.jpg?v=1572289091",
                "variantIds": [31048536260655],
                "height": 1000,
                "width": 1000,
                "id": 13322705928239,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322705928239"
            }],
            "id": 4320729038895,
            "adminGraphQLAPIId": "gid://shopify/Product/4320729038895"
        }, {
            "title": "Dad hat",
            "bodyHtml": "Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.<br>\n<br>\n• 100% chino cotton twill<br>\n• Unstructured, 6-panel, low-profile<br>\n• 3 ⅛” crown<br>\n• Adjustable strap with antique buckle<br>\n• Head circumference: 20 ½” - 21 ⅝” ",
            "createdAt": "\/Date(1572274738000-0400)\/",
            "updatedAt": "\/Date(1572274739000-0400)\/",
            "publishedAt": "\/Date(1572274739000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "dad-hat-1",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320729989167,
                "title": "Default Title",
                "sku": "4562208",
                "position": 1,
                "grams": 94,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547022307375,
                "price": 22.50,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274738000-0400)\/",
                "updatedAt": "\/Date(1572274739000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322710417455,
                "weight": 3.3,
                "weightUnit": "oz",
                "id": 31048539340847,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048539340847"
            }],
            "options": [{
                "productId": 4320729989167,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615287828527
            }],
            "images": [{
                "productId": 4320729989167,
                "position": 1,
                "createdAt": "\/Date(1572274739000-0400)\/",
                "updatedAt": "\/Date(1572274739000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-251b9005.jpg?v=1572289139",
                "variantIds": [31048539340847],
                "height": 1000,
                "width": 1000,
                "id": 13322710417455,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322710417455"
            }],
            "id": 4320729989167,
            "adminGraphQLAPIId": "gid://shopify/Product/4320729989167"
        }, {
            "title": "Snapback Hat",
            "bodyHtml": "This hat is structured with a classic fit, flat brim, and full buckram. The adjustable snap closure makes it a comfortable, one-size-fits-most hat. <br>\n<br>\n• 80% acrylic, 20% wool (green camo is 60% cotton, 40% polyester)<br>\n• Structured, 6-panel, high-profile<br>\n• Plastic snap closure<br>\n• Green under visor<br>\n• Head circumference: 21 ⅝” - 23 ⅝” (54.9 cm to 60 cm)",
            "createdAt": "\/Date(1572274705000-0400)\/",
            "updatedAt": "\/Date(1572274707000-0400)\/",
            "publishedAt": "\/Date(1572274707000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "snapback-hat",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320729399343,
                "title": "Default Title",
                "sku": "7557735",
                "position": 1,
                "grams": 113,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547020210223,
                "price": 21.00,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274705000-0400)\/",
                "updatedAt": "\/Date(1572274706000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322707271727,
                "weight": 4,
                "weightUnit": "oz",
                "id": 31048537276463,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048537276463"
            }],
            "options": [{
                "productId": 4320729399343,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615287238703
            }],
            "images": [{
                "productId": 4320729399343,
                "position": 1,
                "createdAt": "\/Date(1572274706000-0400)\/",
                "updatedAt": "\/Date(1572274706000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-eb9a2cdf.jpg?v=1572289106",
                "variantIds": [31048537276463],
                "height": 1000,
                "width": 1000,
                "id": 13322707271727,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322707271727"
            }],
            "id": 4320729399343,
            "adminGraphQLAPIId": "gid://shopify/Product/4320729399343"
        }, {
            "title": "Sustainable T-Shirt",
            "bodyHtml": "It may look like any regular tee, but it's actually far from ordinary. This shirt is made from organic cotton and recycled poly rPET blend that makes the fabric more durable and heavyweight. It saves at least 4 plastic bottles from ending up in a landfill, or worse. So, if you’re searching for a unique and sustainable way to express yourself, look no further than this!<br>\n<br>\n• 60% organic cotton, 40% recycled poly rPET<br>\n• Fabric weight: 5.6 oz/yd² (190 g/m²)<br>\n• 20 singles<br>\n• Crew neck<br>\n• Side seams<br>\n• Unisex fit<br>\n<p><strong class=\"size-guide-title\">Size guide</strong></p><div class=\"table-responsive dynamic\" data-unit-system=\"imperial\"><table cellpadding=\"5\"><tbody>\n<tr>\n<td> </td>\n<td><strong>S</strong></td>\n<td><strong>M</strong></td>\n<td><strong>L</strong></td>\n<td><strong>XL</strong></td>\n<td><strong>2XL</strong></td>\n</tr>\n<tr>\n<td><strong>Shirt length (inches)</strong></td>\n<td>28</td>\n<td>29</td>\n<td>31</td>\n<td>32</td>\n<td>33</td>\n</tr>\n<tr>\n<td><strong>Shirt width (chest) (inches)</strong></td>\n<td>18 ½</td>\n<td>20</td>\n<td>22</td>\n<td>24</td>\n<td>26</td>\n</tr>\n</tbody></table></div><div class=\"pf-customisable-product\" style=\"display: none;\"></div>",
            "createdAt": "\/Date(1572274673000-0400)\/",
            "updatedAt": "\/Date(1572274677000-0400)\/",
            "publishedAt": "\/Date(1572274677000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "sustainable-t-shirt",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320728809519,
                "title": "S",
                "sku": "9575884",
                "position": 1,
                "grams": 130,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547017818159,
                "price": 23.50,
                "option1": "S",
                "createdAt": "\/Date(1572274674000-0400)\/",
                "updatedAt": "\/Date(1572274676000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322704158767,
                "weight": 4.6,
                "weightUnit": "oz",
                "id": 31048535277615,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048535277615"
            }, {
                "productId": 4320728809519,
                "title": "M",
                "sku": "9284786",
                "position": 2,
                "grams": 141,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547017850927,
                "price": 23.50,
                "option1": "M",
                "createdAt": "\/Date(1572274674000-0400)\/",
                "updatedAt": "\/Date(1572274676000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322704158767,
                "weight": 4.96,
                "weightUnit": "oz",
                "id": 31048535310383,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048535310383"
            }, {
                "productId": 4320728809519,
                "title": "L",
                "sku": "1375167",
                "position": 3,
                "grams": 164,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547017883695,
                "price": 23.50,
                "option1": "L",
                "createdAt": "\/Date(1572274674000-0400)\/",
                "updatedAt": "\/Date(1572274676000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322704158767,
                "weight": 5.8,
                "weightUnit": "oz",
                "id": 31048535343151,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048535343151"
            }, {
                "productId": 4320728809519,
                "title": "XL",
                "sku": "5797737",
                "position": 4,
                "grams": 176,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547017916463,
                "price": 23.50,
                "option1": "XL",
                "createdAt": "\/Date(1572274674000-0400)\/",
                "updatedAt": "\/Date(1572274676000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322704158767,
                "weight": 6.2,
                "weightUnit": "oz",
                "id": 31048535375919,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048535375919"
            }, {
                "productId": 4320728809519,
                "title": "2XL",
                "sku": "3369574",
                "position": 5,
                "grams": 196,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547017949231,
                "price": 26.00,
                "option1": "2XL",
                "createdAt": "\/Date(1572274674000-0400)\/",
                "updatedAt": "\/Date(1572274676000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322704158767,
                "weight": 6.9,
                "weightUnit": "oz",
                "id": 31048535408687,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048535408687"
            }],
            "options": [{
                "productId": 4320728809519,
                "name": "Size",
                "position": 1,
                "values": ["S", "M", "L", "XL", "2XL"],
                "id": 5615286616111
            }],
            "images": [{
                "productId": 4320728809519,
                "position": 1,
                "createdAt": "\/Date(1572274675000-0400)\/",
                "updatedAt": "\/Date(1572274675000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-04e9ff44.jpg?v=1572289075",
                "variantIds": [31048535277615, 31048535310383, 31048535343151, 31048535375919, 31048535408687],
                "height": 1000,
                "width": 1000,
                "id": 13322704158767,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322704158767"
            }],
            "id": 4320728809519,
            "adminGraphQLAPIId": "gid://shopify/Product/4320728809519"
        }, {
            "title": "Trucker Cap",
            "bodyHtml": "Classic trucker cap style with a cool fabric blend. <br>\n<br>\n• 47% cotton/28% nylon/25% polyester<br>\n• Structured <br>\n• Five panel<br>\n• High profile<br>\n• Flat bill<br>\n• Snapback closure<br>\n",
            "createdAt": "\/Date(1572274658000-0400)\/",
            "updatedAt": "\/Date(1572274660000-0400)\/",
            "publishedAt": "\/Date(1572274660000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "trucker-cap",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320728580143,
                "title": "Default Title",
                "sku": "9516917",
                "position": 1,
                "grams": 99,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547016572975,
                "price": 21.00,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274658000-0400)\/",
                "updatedAt": "\/Date(1572274659000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322702782511,
                "weight": 3.5,
                "weightUnit": "oz",
                "id": 31048534130735,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048534130735"
            }],
            "options": [{
                "productId": 4320728580143,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615286386735
            }],
            "images": [{
                "productId": 4320728580143,
                "position": 1,
                "createdAt": "\/Date(1572274659000-0400)\/",
                "updatedAt": "\/Date(1572274659000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-5ec45e08.png?v=1572289059",
                "variantIds": [31048534130735],
                "height": 1000,
                "width": 1000,
                "id": 13322702782511,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322702782511"
            }],
            "id": 4320728580143,
            "adminGraphQLAPIId": "gid://shopify/Product/4320728580143"
        }, {
            "title": "Trucker Cap",
            "bodyHtml": "This six-panel trucker cap with a mesh back will be a comfy and classic choice for a perfect day in the sun. <br>\n<br>\n• Structured, mid-profile, six-panel cap<br>\n• 60% cotton, 40% polyester*<br>\n• Hard buckram front panels<br>\n• Mesh back<br>\n• Permacurv visor, matching under-visor<br>\n• Plastic adjustable closure<br>\n• 3.5\" crown (8.9 cm)<br>\n• Head circumference - 21 5/8\" to 23 5/8\" (54.9 cm to 60 cm)<br>\n<br>\n*The percentage can change a little from hat to hat",
            "createdAt": "\/Date(1572274682000-0400)\/",
            "updatedAt": "\/Date(1572274685000-0400)\/",
            "publishedAt": "\/Date(1572274685000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "trucker-cap-1",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320728907823,
                "title": "Default Title",
                "sku": "8269737",
                "position": 1,
                "grams": 109,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547018473519,
                "price": 19.50,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274683000-0400)\/",
                "updatedAt": "\/Date(1572274684000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322705469487,
                "weight": 3.84,
                "weightUnit": "oz",
                "id": 31048535867439,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048535867439"
            }],
            "options": [{
                "productId": 4320728907823,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615286714415
            }],
            "images": [{
                "productId": 4320728907823,
                "position": 1,
                "createdAt": "\/Date(1572274684000-0400)\/",
                "updatedAt": "\/Date(1572274684000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-f9b72747.jpg?v=1572289084",
                "variantIds": [31048535867439],
                "height": 1000,
                "width": 1000,
                "id": 13322705469487,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322705469487"
            }],
            "id": 4320728907823,
            "adminGraphQLAPIId": "gid://shopify/Product/4320728907823"
        }, {
            "title": "Unisex Sweatshirt",
            "bodyHtml": "A sturdy and warm sweatshirt bound to keep you warm in the colder months. A pre-shrunk, classic fit sweater that's made with air-jet spun yarn for a soft feel and reduced pilling.<br>\n<br>\n• 50% cotton, 50% polyester<br>\n• Pre-shrunk<br>\n• Classic fit with no center crease<br>\n• 1x1 athletic rib knit collar with spandex<br>\n• Air-jet spun yarn with a soft feel and reduced pilling<br>\n• Double-needle stitched collar, shoulders, armholes, cuffs, and hem<p><strong class=\"size-guide-title\">Size guide</strong></p><div class=\"table-responsive dynamic\" data-unit-system=\"imperial\"><table cellpadding=\"5\"><tbody>\n<tr>\n<td> </td>\n<td><strong>S</strong></td>\n<td><strong>M</strong></td>\n<td><strong>L</strong></td>\n<td><strong>XL</strong></td>\n<td><strong>2XL</strong></td>\n</tr>\n<tr>\n<td><strong>Length (inches)</strong></td>\n<td>26</td>\n<td>27</td>\n<td>28</td>\n<td>29</td>\n<td>30</td>\n</tr>\n<tr>\n<td><strong>Width (inches)</strong></td>\n<td>20</td>\n<td>22</td>\n<td>24</td>\n<td>26</td>\n<td>28</td>\n</tr>\n</tbody></table></div><div class=\"pf-customisable-product\" style=\"display: none;\"></div>",
            "createdAt": "\/Date(1572274695000-0400)\/",
            "updatedAt": "\/Date(1572274698000-0400)\/",
            "publishedAt": "\/Date(1572274698000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "unisex-sweatshirt",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320729169967,
                "title": "S",
                "sku": "4764508",
                "position": 1,
                "grams": 332,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547019423791,
                "price": 25.00,
                "option1": "S",
                "createdAt": "\/Date(1572274695000-0400)\/",
                "updatedAt": "\/Date(1572274697000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322706386991,
                "weight": 11.7,
                "weightUnit": "oz",
                "id": 31048536752175,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048536752175"
            }, {
                "productId": 4320729169967,
                "title": "M",
                "sku": "4184404",
                "position": 2,
                "grams": 391,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547019456559,
                "price": 25.00,
                "option1": "M",
                "createdAt": "\/Date(1572274695000-0400)\/",
                "updatedAt": "\/Date(1572274697000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322706386991,
                "weight": 13.8,
                "weightUnit": "oz",
                "id": 31048536784943,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048536784943"
            }, {
                "productId": 4320729169967,
                "title": "L",
                "sku": "5338668",
                "position": 3,
                "grams": 414,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547019489327,
                "price": 25.00,
                "option1": "L",
                "createdAt": "\/Date(1572274695000-0400)\/",
                "updatedAt": "\/Date(1572274697000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322706386991,
                "weight": 14.6,
                "weightUnit": "oz",
                "id": 31048536817711,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048536817711"
            }, {
                "productId": 4320729169967,
                "title": "XL",
                "sku": "9960828",
                "position": 4,
                "grams": 462,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547019522095,
                "price": 25.00,
                "option1": "XL",
                "createdAt": "\/Date(1572274695000-0400)\/",
                "updatedAt": "\/Date(1572274697000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322706386991,
                "weight": 16.3,
                "weightUnit": "oz",
                "id": 31048536850479,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048536850479"
            }, {
                "productId": 4320729169967,
                "title": "2XL",
                "sku": "6330076",
                "position": 5,
                "grams": 544,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547019554863,
                "price": 27.00,
                "option1": "2XL",
                "createdAt": "\/Date(1572274696000-0400)\/",
                "updatedAt": "\/Date(1572274697000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322706386991,
                "weight": 19.2,
                "weightUnit": "oz",
                "id": 31048536883247,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048536883247"
            }],
            "options": [{
                "productId": 4320729169967,
                "name": "Size",
                "position": 1,
                "values": ["S", "M", "L", "XL", "2XL"],
                "id": 5615287009327
            }],
            "images": [{
                "productId": 4320729169967,
                "position": 1,
                "createdAt": "\/Date(1572274697000-0400)\/",
                "updatedAt": "\/Date(1572274697000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-cdf01546.jpg?v=1572289097",
                "variantIds": [31048536752175, 31048536784943, 31048536817711, 31048536850479, 31048536883247],
                "height": 1000,
                "width": 1000,
                "id": 13322706386991,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322706386991"
            }],
            "id": 4320729169967,
            "adminGraphQLAPIId": "gid://shopify/Product/4320729169967"
        }, {
            "title": "Vintage Cotton Twill Cap",
            "bodyHtml": "Everybody knows that dad caps are no longer just for dads, so get an embroidered cotton twill cap for yourself! This one's really special thanks to the intricate embroidery detail and the washed out vintage feel.<br>\n<br>\n• 100% cotton twill<br>\n• 6-panel unstructured cap with a low profile<br>\n• 6 sewn eyelets<br>\n• Black sweatband<br>\nMetal snap buckle with an antique brass finish",
            "createdAt": "\/Date(1572274738000-0400)\/",
            "updatedAt": "\/Date(1572274740000-0400)\/",
            "publishedAt": "\/Date(1572274740000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "vintage-cotton-twill-cap",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320730021935,
                "title": "Default Title",
                "sku": "9680879",
                "position": 1,
                "grams": 79,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547022340143,
                "price": 22.50,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274738000-0400)\/",
                "updatedAt": "\/Date(1572274740000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322710515759,
                "weight": 2.8,
                "weightUnit": "oz",
                "id": 31048539373615,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048539373615"
            }],
            "options": [{
                "productId": 4320730021935,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615287861295
            }],
            "images": [{
                "productId": 4320730021935,
                "position": 1,
                "createdAt": "\/Date(1572274740000-0400)\/",
                "updatedAt": "\/Date(1572274740000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-ee8a799a.jpg?v=1572289140",
                "variantIds": [31048539373615],
                "height": 1000,
                "width": 1000,
                "id": 13322710515759,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322710515759"
            }],
            "id": 4320730021935,
            "adminGraphQLAPIId": "gid://shopify/Product/4320730021935"
        }, {
            "title": "Vintage Cotton Twill Cap",
            "bodyHtml": "Everybody knows that dad caps are no longer just for dads, so get an embroidered cotton twill cap for yourself! This one's really special thanks to the intricate embroidery detail and the washed out vintage feel.<br>\n<br>\n• 100% cotton twill<br>\n• 6-panel unstructured cap with a low profile<br>\n• 6 sewn eyelets<br>\n• Black sweatband<br>\nMetal snap buckle with an antique brass finish",
            "createdAt": "\/Date(1572274742000-0400)\/",
            "updatedAt": "\/Date(1572274744000-0400)\/",
            "publishedAt": "\/Date(1572274743000-0400)\/",
            "vendor": "Streamer Boutique Dev",
            "productType": "",
            "handle": "vintage-cotton-twill-cap-1",
            "publishedScope": "web",
            "tags": "",
            "variants": [{
                "productId": 4320730087471,
                "title": "Default Title",
                "sku": "4637519",
                "position": 1,
                "grams": 79,
                "inventoryPolicy": "deny",
                "fulfillmentService": "printful",
                "inventoryItemId": 32547022405679,
                "price": 22.50,
                "option1": "Default Title",
                "createdAt": "\/Date(1572274742000-0400)\/",
                "updatedAt": "\/Date(1572274743000-0400)\/",
                "taxable": true,
                "requiresShipping": true,
                "inventoryQuantity": 0,
                "oldInventoryQuantity": 0,
                "imageId": 13322710745135,
                "weight": 2.8,
                "weightUnit": "oz",
                "id": 31048539439151,
                "adminGraphQLAPIId": "gid://shopify/ProductVariant/31048539439151"
            }],
            "options": [{
                "productId": 4320730087471,
                "name": "Title",
                "position": 1,
                "values": ["Default Title"],
                "id": 5615287926831
            }],
            "images": [{
                "productId": 4320730087471,
                "position": 1,
                "createdAt": "\/Date(1572274743000-0400)\/",
                "updatedAt": "\/Date(1572274743000-0400)\/",
                "src": "https://cdn.shopify.com/s/files/1/0248/5692/0111/products/mockup-399be85e.jpg?v=1572289143",
                "variantIds": [31048539439151],
                "height": 1000,
                "width": 1000,
                "id": 13322710745135,
                "adminGraphQLAPIId": "gid://shopify/ProductImage/13322710745135"
            }],
            "id": 4320730087471,
            "adminGraphQLAPIId": "gid://shopify/Product/4320730087471"
        }]

        mounted() {
            LogToTwitch("Hello World", "adsfads")
        }
    }
</script>
<style>
    .carousel-3d-container figure {
        margin: 0;

    }

    .carousel-3d-container figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
    }

    .actions {
        max-width: 260px;
    }

    #main {
        max-width: 100%;
    }

</style>
