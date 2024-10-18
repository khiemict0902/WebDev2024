import './Post.css';
import React from 'react';
import user_ava from '../assets/user_ava.png'
import PostInteract from '../components/PostInteract'

function Post2() {

    return (
        <>
        <div className="post_layout-post">
                    
                    <div className="post_container">
                        {/* Post Title */}
                        <div className="post_main-title">
                            <h1 className="text-title">Chicken and Spinach Manicotti</h1>
                        </div>

                        {/* Author Box */}
                        <div className="post_author-info">
                            <img src={user_ava} alt="avatar" className="post_author-image"/>
                            <div className="post_author-text">
                                <p>Nguyenhai</p>
                            </div>
                        </div>

                        {/* Post interation */}
                        <PostInteract/>

                        {/* Post Content */}
                        <div className="post_content-container">
                            <div className="post_image-title">
                                <img src='https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg' alt="code"/>
                            </div>
                            <div className="post_article-post">  
                                <h3 className="post_small_text"> This chicken and spinach manicotti is one of my favorite weeknight meals. It's packed with flavor and loaded with cheese. Plus it's so easy to prep ahead of time so you can make it in the morning and then bake it later!</h3>

                                <p>There are so many reasons why I love this chicken and spinach manicotti.
                                First of all, it's just a great recipe. It's easy and flavorful and my kids will eat it. It's also super easy to make. I usually use leftover chicken or rotisserie chicken to make the prep work even easier. 
                                Another reason I love this recipe so much is because I can make it ahead of time and bake it later. This is great for when I have time in the mornings but not so much time in the afternoons. With it being soccer season right now my afternoons and evenings are just insane so I can make this up in the morning when the kids are at school and then pop it in the oven between getting kids to where they need to be. Everyone can have a hot dinner after practices with no added stress. Win-win-win.</p>
                                
                                <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-ingredients.jpg" alt="" />
                                                
                                <h3>Ingredient</h3>
                                <p>Manicotti Pasta - I use uncooked manicotti and it turns out great. You can also cook it to al dente according to package directions but I have found that this is just an unnecessary step.</p>
                                <p>Ricotta - The higher quality ricotta you can use, the better. Cheap ricotta can have almost a grainy texture that isn't my favorite. If I can't find ricotta, cottage cheese works fine, just drain it well.</p>
                                <p>Chicken - For this recipe I used some leftover diced chicken (read more about this below), but a rotisserie chicken will also work well in the manicotti filling.</p>
                                <p>Mozzarella Cheese - I like to get a block and shred the mozzarella myself so it's nice and fresh.</p>
                                <p>Parmesan - Fresh, shredded is best. Not the powdery kind in the can.</p>
                                <p>Egg - This acts as a binder to help hold everything together</p>
                                <p>Spinach - You can use fresh or frozen spinach. If you use frozen, be sure to thaw it and squeeze out the excess water.</p>
                                <p>Seasonings - I use salt and pepper but you can also add a dash of nutmeg to bring out the cheesy flavors</p>
                                <p>Spaghetti Sauce - sometimes I like to use our homemade spaghetti sauce recipe, but most of the time I just use a jar of store-bought just to make things easier.</p>
                                <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Filling-shells-Chicken-and-Spinach-Manicotti.jpg" alt="" />
                                                    
                                <h3>How to Make Chicken and Spinach Manicotti</h3>
                                <p>1. Combine the filling ingredients: Make the chicken and spinach filling by combining the ricotta, chicken, spinach, mozzarella cheese, parmesan cheese, egg, and seasonings in a mixing bowl. Mix well until well combined.</p>
                                <p>2. Prepare the pan: Spread about a half cup of spaghetti sauce evenly along the bottom of a 9×13 baking dish. This will make is to the manicotti is saucy all around and will also help the manicotti from sticking to the pan.</p>
                                <p>3. Fill the manicotti: Use a spoon to scoop the chicken and spinach filling and stuff the manicotti. Press the filling in firmly without breaking the pasta. You want it to be completely full from end to end.</p>
                                <p>4. Add to the pan: Place the manicotti in the pan in a row. Line them up in a way so you can make the best use of the space in the pan. Pour the remaining sauce over the manicotti making sure every shell is completely covered in sauce.</p>
                                <p>5. Bake: Cover with foil and bake a 350-degrees F for 55 minutes. Remove the pan from the oven, take off the foil and sprinkle the remaining mozzarella cheese over the shells. I like to be generous with the cheese topping because who doesn't like extra cheesy manicotti? Bake for 5 more minutes or until the cheese is melted, then serve!</p>
                                <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-garnished.jpg" alt="" />
                                                    
                                <h3>Using Leftover Chicken</h3>
                                <br />This chicken and spinach manicotti is one of my favorite “leftover chicken” recipes. I almost always have cooked chicken in my fridge and it’s so easy to measure out a cup or two to throw into the mixture. You can definitely use pre-cooked chicken from the store but, here’s a fun little fact about me, I hate store-bought or fast food precooked chicken. I’m not talking about rotisserie chicken that I can buy whole and shred myself, that’s ok. I’m talking about the kind of pre-cooked chicken strips or diced chicken that they put on top of pre-made salads or come in individual packages in the refrigerated section. It just doesn’t taste right to me and the texture is just way off.
                                <br />That being said, I love having pre-cooked chicken on-hand, but I have to do it myself. Oftentimes at the beginning of the week I will cook up a bunch of seasoned chicken on the grill, dice it up, and keep it in the fridge to use on salads or recipes throughout the week. In the winter I will either bake the chicken or cook it in the CrockPot and then dice it up to use in recipes. It’s so convenient to have on hand and it always comes in clutch for this recipe
                                <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-cheese-pull.jpg" alt="" />
                                                    
                                <h3>Prep Now, Bake Later</h3>
                                <p>As I mentioned above, this is a great meal to make ahead of time. 
                                You can make it a day or two ahead and keep it in the refrigerator or you can make it a full-on freezer meal and prepare it weeks, or even months, ahead to have on hand as quick back-up plan. If I am planning on using this as a freezer meal, I will use a disposable foil baking dish, cover tightly with a double layer of foil, then I also wrap it in a plastic grocery bag. I don’t know why, but wrapping it in a grocery bag seems to help with freezer burn. When ready to bake, thaw in the fridge for 1-2 days and then follow the instructions as directed below. When cooking directly from frozen, put the foil covered pan directly in the oven and bake at 350 for 60-75 minutes or until completely cooked through. Add the cheese and bake another 5 minutes uncovered.</p>
                                <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Serving-Chicken-and-Spinach-Manicotti.jpg" alt="" />
                                                    
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Post2
            // <div lang="en">
            //     <head>
            //         <title>Post2</title>
            //         <meta charset="utf-8" />
            //         <meta name="viewport" content="width=device-width, initial-scale=1" />
            //     </head>
        
            //     <body className="post_layout-post">
            //         <div className="post_site-content">
            //             <div className="post_container">
            //                 {/* Site Title */}
            //                 <div className="post_main-title">
            //                     <h1 className="text-title">Family Repceipe</h1>
            //                     <p className="post_lead">This post may contain affiliate links. See our disclosure policy.</p>
            //                 </div>
        
            //                 {/* Content */}
            //                 <div className="post_main-content">
            //                     {/* Begin Article */}
            //                         <div className="container">
            //                             <div className="post_row">
            //                                 {/* Post */}
            //                                 <div className="post_post">
            //                                     <div className="post_mainheading">
            //                                         {/* Author Box */}
            //                                         <div className="post_info">
            //                                             <div className="post_re-img">
            //                                                 <img src="" alt="avatar" className="post_image"/>
            //                                             </div>
            //                                             <div className="post_text">
            //                                                 <p> Heidi Rasmussen</p>
            //                                             </div>
            //                                         </div>
            //                                         {/* Post Title */}
            //                                     </div>
                                        
            //                                     <div className="post_article-post">
                                                    // <h1 className="post_text-title">Chicken and Spinach Manicotti</h1>
                                                    
                                                    // <h3 className="post_small_text"> This chicken and spinach manicotti is one of my favorite weeknight meals. It's packed with flavor and loaded with cheese. Plus it's so easy to prep ahead of time so you can make it in the morning and then bake it later!</h3>
                                                    // <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-fork-cut.jpg" alt="" />

                                                    // <p>There are so many reasons why I love this chicken and spinach manicotti.
                                                    //     <br /> First of all, it's just a great recipe. It's easy and flavorful and my kids will eat it. It's also super easy to make. I usually use leftover chicken or rotisserie chicken to make the prep work even easier. 
                                                    //     <br />Another reason I love this recipe so much is because I can make it ahead of time and bake it later. This is great for when I have time in the mornings but not so much time in the afternoons. With it being soccer season right now my afternoons and evenings are just insane so I can make this up in the morning when the kids are at school and then pop it in the oven between getting kids to where they need to be. Everyone can have a hot dinner after practices with no added stress. Win-win-win.</p>
                                                    // <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-ingredients.jpg" alt="" />
                                                
                                                
                                                    //     <h3>Ingredient</h2>
                                                    //     <li>Manicotti Pasta - I use uncooked manicotti and it turns out great. You can also cook it to al dente according to package directions but I have found that this is just an unnecessary step.</li>
                                                    //     <li>Ricotta - The higher quality ricotta you can use, the better. Cheap ricotta can have almost a grainy texture that isn't my favorite. If I can't find ricotta, cottage cheese works fine, just drain it well.</li>
                                                    //     <li>Chicken - For this recipe I used some leftover diced chicken (read more about this below), but a rotisserie chicken will also work well in the manicotti filling.</li>
                                                    //     <li>Mozzarella Cheese - I like to get a block and shred the mozzarella myself so it's nice and fresh.</li>
                                                    //     <li>Parmesan - Fresh, shredded is best. Not the powdery kind in the can.</li>
                                                    //     <li>Egg - This acts as a binder to help hold everything together</li>
                                                    //     <li>Spinach - You can use fresh or frozen spinach. If you use frozen, be sure to thaw it and squeeze out the excess water.</li>
                                                    //     <li>Seasonings - I use salt and pepper but you can also add a dash of nutmeg to bring out the cheesy flavors</li>
                                                    //     <li>Spaghetti Sauce - sometimes I like to use our homemade spaghetti sauce recipe, but most of the time I just use a jar of store-bought just to make things easier.</li>
                                                    //     <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Filling-shells-Chicken-and-Spinach-Manicotti.jpg" alt="" />
                                                    

                                                    
                                                    //     <h2>How to Make Chicken and Spinach Manicotti</h2>
                                                    //     <ol>Combine the filling ingredients: Make the chicken and spinach filling by combining the ricotta, chicken, spinach, mozzarella cheese, parmesan cheese, egg, and seasonings in a mixing bowl. Mix well until well combined.</ol>
                                                    //     <ol>Prepare the pan: Spread about a half cup of spaghetti sauce evenly along the bottom of a 9×13 baking dish. This will make is to the manicotti is saucy all around and will also help the manicotti from sticking to the pan.</ol>
                                                    //     <ol>Fill the manicotti: Use a spoon to scoop the chicken and spinach filling and stuff the manicotti. Press the filling in firmly without breaking the pasta. You want it to be completely full from end to end.</ol>
                                                    //     <ol>Add to the pan: Place the manicotti in the pan in a row. Line them up in a way so you can make the best use of the space in the pan. Pour the remaining sauce over the manicotti making sure every shell is completely covered in sauce.</ol>
                                                    //     <ol>Bake: Cover with foil and bake a 350-degrees F for 55 minutes. Remove the pan from the oven, take off the foil and sprinkle the remaining mozzarella cheese over the shells. I like to be generous with the cheese topping because who doesn't like extra cheesy manicotti? Bake for 5 more minutes or until the cheese is melted, then serve!</ol>
                                                    //     <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-garnished.jpg" alt="" />
                                                    
                                                    
                                                    //     <h2>Using Leftover Chicken</h2>
                                                    //     <br />This chicken and spinach manicotti is one of my favorite “leftover chicken” recipes. I almost always have cooked chicken in my fridge and it’s so easy to measure out a cup or two to throw into the mixture. You can definitely use pre-cooked chicken from the store but, here’s a fun little fact about me, I hate store-bought or fast food precooked chicken. I’m not talking about rotisserie chicken that I can buy whole and shred myself, that’s ok. I’m talking about the kind of pre-cooked chicken strips or diced chicken that they put on top of pre-made salads or come in individual packages in the refrigerated section. It just doesn’t taste right to me and the texture is just way off.
                                                    //     <br />That being said, I love having pre-cooked chicken on-hand, but I have to do it myself. Oftentimes at the beginning of the week I will cook up a bunch of seasoned chicken on the grill, dice it up, and keep it in the fridge to use on salads or recipes throughout the week. In the winter I will either bake the chicken or cook it in the CrockPot and then dice it up to use in recipes. It’s so convenient to have on hand and it always comes in clutch for this recipe
                                                    //     <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Chicken-and-Spinach-Manicotti-cheese-pull.jpg" alt="" />
                                                    

                                                    
                                                    //     <h2>Prep Now, Bake Later</h2>
                                                    //     <p>As I mentioned above, this is a great meal to make ahead of time. 
                                                    //         You can make it a day or two ahead and keep it in the refrigerator or you can make it a full-on freezer meal and prepare it weeks, or even months, ahead to have on hand as quick back-up plan. If I am planning on using this as a freezer meal, I will use a disposable foil baking dish, cover tightly with a double layer of foil, then I also wrap it in a plastic grocery bag. I don’t know why, but wrapping it in a grocery bag seems to help with freezer burn. When ready to bake, thaw in the fridge for 1-2 days and then follow the instructions as directed below. When cooking directly from frozen, put the foil covered pan directly in the oven and bake at 350 for 60-75 minutes or until completely cooked through. Add the cheese and bake another 5 minutes uncovered.</p>
                                                    //     <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2024/09/Serving-Chicken-and-Spinach-Manicotti.jpg" alt="" />
                                                    
            //                                     </div>
            //                                 </div>
            //                                 {/* End Post */}
            //                             </div>
            //                         </div>
            //                 {/* End Article */}
            //                 </div>
            //             </div>
            //         </div>
            //     </body>
            // </div>