$(document).ready(function(){
	const productDetails = [

		{
			productName : 'Levis',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2425786/2018/3/22/11521710079400-Roadster-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-1011521710079148-1.jpg',
			productPrice : 'Rs. 750',
			productSize : 'Men 512 Slim Tapered Fit Jeans',
			productView : '23.2',
			productReview : '2.6K',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.1500',
			productUrl : 'https://www.myntra.com/jeans/levis/levis-men-grey-512-slim-tapered-fit-heavy-fade-stretchable-jeans/15038500/buy',
			newProduct : 'New',
			ProductInfo : 'Only Few Left!'
		},
		{
			productName : 'U.S. Polo Assn. Denim Co.',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16320462/2021/12/16/b4a87cf7-579a-4e5d-8268-d3edce530c7a1639645495401-U-S-Polo-Assn-Denim-Co-Men-Blue-Regallo-Skinny-Fit-Stretchab-1.jpg',
			productPrice : 'Rs. 1099',
			productSize : 'Men Regallo Skinny Fit Jeans',
			productView : '2.2',
			productReview : '1.6K',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.1999',
			productUrl : 'https://www.myntra.com/jeans/us-polo-assn-denim-co/u-s-polo-assn-denim-co-men-blue-regallo-skinny-fit-stretchable-jeans/16320462/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'HIGHLANDER',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2948543/2018/3/30/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1.jpg',
			productPrice : 'Rs. 924',
			productSize : 'Men Slim Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.1849',
			productUrl : 'https://www.myntra.com/jeans/highlander/highlander-men-black-slim-fit-mid-rise-clean-look-stretchable-cropped-jeans/2948543/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Levis',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14852230/2021/8/31/52d7cbd9-0c5d-48ca-bc5e-f60adeaa5b5a1630410768971-Levis-Men-Jeans-151630410768318-1.jpg',
			productPrice : 'Rs. 1649',
			productSize : 'Men 512 Slim Tapered Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.3299',
			productUrl : 'https://www.myntra.com/jeans/levis/levis-men-blue-512-slim-tapered-fit-light-fade-stretchable-jeans/14852230/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Ducati',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14569306/2021/11/2/3a303bf4-4889-4a27-a465-f00db4283efa1635834158826-Ducati-Men-Jeans-3331635834158240-1.jpg',
			productPrice : 'Rs. 1599',
			productSize : 'Men Slim Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(60% OFF)',
			productOldprice : 'Rs.3999',
			productUrl : 'https://www.myntra.com/jeans/ducati/ducati-men-blue-slim-fit-light-fade-mid-rise-stretchable-jeans/14569306/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Roadster',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5670082/2018/6/12/8f314ce5-b7de-4983-855e-ef91843f23cb1528809988642-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Low-Distress-Stretchable-Jeans-5871528809988539-1.jpg',
			productPrice : 'Rs. 899',
			productSize : 'Men Skinny Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.1799',
			productUrl : 'https://www.myntra.com/jeans/roadster/roadster-men-navy-blue-skinny-fit-mid-rise-low-distress-stretchable-jeans/5670082/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'WROGN',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg',
			productPrice : 'Rs. 1439',
			productSize : 'Men Slim Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '( 40 % OFF)',
			productOldprice : 'Rs.2399',
			productUrl : 'https://www.myntra.com/jeans/wrogn/wrogn-men-black-slim-fit-mid-rise-clean-look-stretchable-jeans/1729344/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'U.S. Polo Assn. Denim Co.',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16320450/2021/12/16/c22e0e8b-325f-42ef-9d37-a78858cd01f31639657174762-U-S-Polo-Assn-Denim-Co-Men-Navy-Blue-Regallo-Skinny-Fit-MId--1.jpg',
			productPrice : 'Rs. 1264',
			productSize : 'Men Skinny Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(45% OFF)',
			productOldprice : 'Rs.2299',
			productUrl : 'https://www.myntra.com/jeans/us-polo-assn-denim-co/u-s-polo-assn-denim-co-men-navy-blue-regallo-skinny-fit-mid-rise-light-fade-jeans/16320450/buy',
			newProduct : 'New Season',
			ProductInfo : ''
		},
		{
			productName : 'Roadster',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10092105/2019/10/15/11e8597e-85a5-4dcd-a40a-dc9647e1b89a1571142731707-Roadster-Men-Jeans-5221571142730946-1.jpg',
			productPrice : 'Rs. 764',
			productSize : 'Men Skinny Fit Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(55% OFF)',
			productOldprice : 'Rs.1699',
			productUrl : 'https://www.myntra.com/jeans/roadster/roadster-men-navy-blue-skinny-fit-mid-rise-clean-look-stretchable-jeans/10092105/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Calvin Klein Jeans',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15152020/2021/11/4/5ae5434c-fd5d-4dd7-8d95-d678618248c31636024438190-Calvin-Klein-Jeans-Men-Jeans-791636024437550-1.jpg',
			productPrice : 'Rs. 7999',
			productSize : 'Men Skinny Fit Mid-Rise Jeans',
			productView : '1.2',
			productReview : '4.6K',
			productDiscount : '(20% OFF)',
			productOldprice : 'Rs.9999',
			productUrl : 'https://www.myntra.com/jeans/calvin-klein-jeans/calvin-klein-jeans-men-bluish-grey-skinny-fit-mid-rise-light-fade-jeans/15152020/buy',
			newProduct : '',
			ProductInfo : 'Only Few Left!'
		},
		{
			productName : 'Ducati',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14569308/2021/11/2/319f3a9f-ae0f-4571-ab52-f2bf64166f7c1635835708035-Ducati-Men-Jeans-9111635835707071-1.jpg',
			productPrice : 'Rs. 1599',
			productSize : 'Men Slim Fit Jeans',
			productView : '9.5',
			productReview : '3.0',
			productDiscount : '(60% OFF)',
			productOldprice : 'Rs.3999',
			productUrl : 'https://www.myntra.com/jeans/ducati/ducati-men-blue-slim-fit-light-fade-mid-rise-stretchable-jeans/14569308/buy',
			newProduct : 'New',
			ProductInfo : ''
		},
		{
			productName : 'Calvin Klein Jeans',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11372900/2020/11/25/01bfe7ec-4658-4d33-9672-6294acc20ebc1606301695599JacketsCalvinKleinJeansMenSweatshirtsCalvinKleinJeansMenSwea1.jpg',
			productPrice : 'Rs. 7799',
			productSize : 'Men 016 Skinny Fit Jeans',
			productView : '9.5',
			productReview : '3.0',
			productDiscount : '(40% OFF)',
			productOldprice : 'Rs.12999',
			productUrl : 'https://www.myntra.com/jeans/calvin-klein-jeans/calvin-klein-jeans-men-blue-016-skinny-fit-mid-rise-clean-look-stretchable-jeans/11372900/buy',
			newProduct : '',
			ProductInfo : 'Only Few Left!'
		},
		{
			productName : 'Levis',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14852064/2021/7/30/ab7eec4a-12db-4fa3-a9d5-21ee34eaba8c1627619292771-Levis-Men-Jeans-7881627619292095-1.jpg',
			productPrice : 'Rs. 2149',
			productSize : 'Men 512 Slim Taper Fit Jeans',
			productView : '2.5',
			productReview : '3.0',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.4299',
			productUrl : 'https://www.myntra.com/jeans/levis/levis-men-black-512-slim-taper-fit-stretchable-jeans/14852064/buy',
			newProduct : 'New Season',
			ProductInfo : ''
		},
		{
			productName : 'Roadster',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10092097/2019/10/15/adebe2b5-fa5a-4f24-aa6b-318a220756c21571136170029-Roadster-Men-Jeans-2931571136167945-1.jpg',
			productPrice : 'Rs. 849',
			productSize : 'Men Skinny Fit Jeans',
			productView : '2.5',
			productReview : '3.0',
			productDiscount : '(50% OFF)',
			productOldprice : 'Rs.1699',
			productUrl : 'https://www.myntra.com/jeans/roadster/roadster-men-blue-skinny-fit-mid-rise-clean-look-stretchable-jeans/10092097/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'WROGN',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5556622/2018/6/13/327fb40e-d0e1-4f30-af28-57b2cc33c7431528890028815-WROGN-Men-White-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg',
			productPrice : 'Rs. 1679',
			productSize : 'Men Slim Fit Jeans',
			productView : '2.5',
			productReview : '3.0',
			productDiscount : '( 40 % OFF)',
			productOldprice : 'Rs.2799',
			productUrl : 'https://www.myntra.com/jeans/roadster/roadster-men-blue-skinny-fit-mid-rise-clean-look-stretchable-jeans/10092097/buy',
			newProduct : 'New',
			ProductInfo : ''
		},
		{
			productName : 'Levis',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14852266/2021/10/28/51bdab7a-d6a4-483a-bf24-9186d577fc901635400899816-Levis-Men-Jeans-3641635400899307-1.jpg',
			productPrice : 'Rs. 2034',
			productSize : 'Men 512 Slim Taper Fit Jeans',
			productView : '1.5',
			productReview : '3.2',
			productDiscount : '(45% OFF)',
			productOldprice : 'Rs.3699',
			productUrl : 'https://assets.myntassets.com/jeans/levis/levis-men-blue-512-slim-taper-fit-low-rise-light-fade-stretchable-jeans/14852266/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Ducati',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14569318/2021/11/2/bc9e4baa-49cd-4935-90ad-18dea641e2681635834263683-Ducati-Men-Jeans-181635834263042-1.jpg',
			productPrice : 'Rs. 1599',
			productSize : 'Men Slim Fit Jeans',
			productView : '8.1',
			productReview : '1.21',
			productDiscount : '(60% OFF)',
			productOldprice : 'Rs.3999',
			productUrl : 'https://www.myntra.com/jeans/ducati/ducati-men-blue-slim-fit-light-fade-mid-rise-stretchable-jeans/14569318/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Levis',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14852146/2021/11/29/c3e823f0-8194-4707-90ef-e7c21dc66a6c1638176617215-Levis-Men-Jeans-8811638176616419-1.jpg',
			productPrice : 'Rs. 3054',
			productSize : 'Men 512 Slim Tapered Fit Jeans',
			productView : '0.1',
			productReview : '1.1',
			productDiscount : '(35% OFF)',
			productOldprice : 'Rs.4699',
			productUrl : 'https://www.myntra.com/jeans/levis/levis-men-black-512-slim-tapered-fit-mid-rise-stretchable-jeans/14852146/buy',
			newProduct : '',
			ProductInfo : ''
		},
		{
			productName : 'Calvin Klein Jeans',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12330336/2021/3/31/b593415d-54cb-400e-875d-8391489b57a91617193792839-Calvin-Klein-Jeans-Men-Jeans-4291617193791656-1.jpg',
			productPrice : 'Rs. 7799',
			productSize : 'Men Tapered Fit Jeans',
			productView : '23.1',
			productReview : '3.4',
			productDiscount : '(40% OFF)',
			productOldprice : 'Rs.12999',
			productUrl : 'https://www.myntra.com/jeans/calvin-klein-jeans/calvin-klein-jeans-men-blue-body-tapered-fit-mid-rise-mildly-distressed-stretchable-jeans/12330336/buy',
			newProduct : '',
			ProductInfo : 'Only Few Left!'
		},
		{
			productName : 'KETCH',
			productImg : 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16196712/2021/11/22/2ed0496e-de07-43a6-b9a4-bd6630fbe5631637573029122KETCHMenCharcoalJoggerLowDistressHeavyFadeStretchableJeans1.jpg',
			productPrice : 'Rs. 699',
			productSize : 'Men Jogger Jeans',
			productView : '7.4',
			productReview : '5.9',
			productDiscount : '(Rs. 1600 OFF)',
			productOldprice : 'Rs.2299',
			productUrl : 'https://www.myntra.com/jeans/ketch/ketch-men-charcoal-grey-jogger-heavy-fade-stretchable-jeans/16196712/buy',
			newProduct : '',
			ProductInfo : ''
		}

	]

	productDetails.forEach(function(i){
		$('.productlist').append(`
			<div class="col-sm-3">
				<a class="a_color" href="`+ i.productUrl +`" target="_blank">
					<div class="card">
						<div class="card-body">
							<div class="img-hover-zoom img-hover-zoom--basic">
									<abbr title="`+ i.productSize +`">
										<img class="cursor" src="`+ i.productImg +`">
									</abbr>
								</div>
							<div class="new">`+ i.newProduct +`</div>
							<div class="jeansview">`+ i.productView +` <span class="star">★</span> `+ i.productReview +`</div>
							<div class="bg_color">
								<div>`+ i.productName +`</div>
								<div class="jeanssize">`+ i.productSize +`</div>
								<div>`+ i.productPrice +` <del class="discount">`+ i.productOldprice +`</del> <span class="jeansdiscount"> `+ i.productDiscount +`</span> </div>
								<div class="infotag">`+ i.ProductInfo +`</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		`)
	});

});