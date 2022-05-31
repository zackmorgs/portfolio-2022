//vwo_vwo_$('head').append('<link rel="stylesheet" class="external-css-link" type="text/css" href="https://localhost.daplie.com:8443/styles/css/styles.css">');

;(function () {
    // utilities + definitions
    // String.prototype.replaceAll = function (find, replace) {
    //     ////console.log('replaceAll', find, replace);
    //     var str = this;
    //     return str.replace(new RegExp(find.replace(/[-\/\\^vwo_$*+?.()|[\]{}]/g, '\\vwo_$&'), 'g'), replace);
    // };
    String.prototype.replaceAll = function(target, replacement) {
      return this.split(target).join(replacement);
    };
    var nav_maker = {
        make_mega_nav: function (nav_item_title, nav_item_href) {
            var html = "";
            html += '<div class="mega-nav">'; // generic class for slideout
            html += '    <a class="nav-group-title" href="{{nav-item-href}}"><h3>{{nav-item-title}}</h3> <small>Shop All <i class="icon icon-caret"></i></small></a>';

            var nav_item_group_title = ["Shop By Grade", "Shop By Topic", "Shop By Format"];

            for (var i = 0; i < nav_item_group_title.length; i++) {
                var this_group_title = nav_item_group_title[i];
                var this_group_index = i;
                html += nav_maker.make_nav_group(nav_item_title, this_group_title, this_group_index);

            }

            html += '<i class="icon icon-nav-bg"></i>';
            // i was upset i had to do this. :/
            
            html += '</div>';

            html = html.replace('{{nav-item-title}}', nav_item_title);
            html = html.replace('{{nav-item-href}}', nav_item_href);
            return html;
        },
        make_nav_group: function (nav_item_title, nav_item_group_title, nav_item_group_index) {
            var css_class = 'nav-group';
            if (nav_item_group_title.indexOf('Grade') > -1) {
                css_class += ' nav-group-grade';
            } else if (nav_item_group_title.indexOf('Topic') > -1) {
                css_class += ' nav-group-topic';
            } else {
                css_class += ' nav-group-format';
            }
            var html = "";
            html += '    <div class="' + css_class + '">';
            html += '        <strong>{{nav-item-group-title}}</strong>';
            html += '        {{nav-item-group-html}}';
            html += '    </div>';
            
            html = html.replace('{{nav-item-group-title}}', nav_item_group_title);
            var this_group_html = nav_maker.nav_group_html(nav_item_title, nav_item_group_title, nav_item_group_index);
            html = html.replace('{{nav-item-group-html}}', this_group_html);

            return html;
        },
        nav_group_html: function (parent_title, nav_group_title, nav_item_group_index) {

            var nav_item_array = [{
                "title": "Reading Foundations",
                "href": "/c/75/reading-foundations",
                "group_html": [
                "<ul class='items'> <li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=250'>Grade PreK</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=251'>Grade K</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=252'>Grade 1</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=253'>Grade 2</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=254'>Grade 3</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=255'>Grade 4</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=256'>Grade 5</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=257'>Grade 6</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=260'>Grade 6+</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/76/reading-foundations-print-concepts'>Print Concepts</a> </li><li class='item'> <a href='/c/77/reading-foundations-phonological-awareness'>Phonological Awareness</a> </li><li class='item'> <a href='/c/78/reading-foundations-phonics-word-analysis'>Phonics &amp; Word Analysis</a> </li><li class='item'> <a href='/c/79/word-recognition'>Word Recognition</a> </li><li class='item'> <a href='/c/80/fluency'>Fluency</a> </li><li class='item'> <a href='/c/81/centers'>Centers</a> </li><li class='item'> <a href='/c/82/early-learning'>Early Learning</a> </li><li class='item'> <a href='/c/83/english-language-learners-ell'>English Language Learners (ELL)</a> </li><li class='item'> <a href='/c/84/daily-practice'>Daily Practice</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=1405'>Book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=1841'>Courseware</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=1509'>E-book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/75/reading-foundations?specs=1591'>Kit</a> </li></ul>"]
                // this html could be pulled with ajax, but since it likely wont change super often, lets just put it here. 
                // unminify and edit to your heart's desire.
            }, {
                "title": "Reading Comprehension ",
                "href": "/c/86/reading-comprehension",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/86/reading-comprehension?specs=250'>PreK</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=257'>Grade 6</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=260'>Grade 6+</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=258'>Grade 7</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=259'>Grade 8</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/87/literature'>Literature</a> </li><li class='item'> <a href='/c/88/informational-text'>Informational Text</a> </li><li class='item'> <a href='/c/89/paired-texts'>Paired Texts</a> </li><li class='item'> <a href='/c/90/centers'>Centers</a> </li><li class='item'> <a href='/c/91/daily-practice'>Daily Practice</a> </li><li class='item'> <a href='/c/92/early-learning'>Early Learning</a> </li><li class='item'> <a href='/c/93/cross-curricular'>Cross-Curricular</a> </li><li class='item'> <a href='/c/95/english-language-learners-ell'>English Language Learners (ELL)</a> </li><li class='item'> <a href='/c/96/test-prep'>Test Prep</a> </li><li class='item'> <a href='/c/97/thinking-skills'>Thinking Skills</a> </li></ul>", 
                "<ul class='items' > <li class='item'> <a href='/c/86/reading-comprehension?specs=1405'>Book</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=1841'>Courseware</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=1509'>E-book</a> </li><li class='item'> <a href='/c/86/reading-comprehension?specs=1591'>Kit</a> </li></ul>"]
            }, {
                "title": "Language",
                "href": "/c/98/language",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/98/language?specs=250'>PreK</a> </li><li class='item'> <a href='/c/98/language?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/98/language?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/98/language?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/98/language?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/98/language?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/98/language?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/98/language?specs=257'>Grade 6</a> </li><li class='item'> <a href='/c/98/language?specs=260'>Grade 6+</a> </li><li class='item'> <a href='/c/98/language?specs=258'>Grade 7</a> </li><li class='item'> <a href='/c/98/language?specs=259'>Grade 8</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/99/grammar-mechanics'>Grammar &amp; Mechanics</a> </li><li class='item'> <a href='/c/100/vocabulary'>Vocabulary</a> </li><li class='item'> <a href='/c/101/speaking-listening'>Speaking &amp; Listening</a> </li><li class='item'> <a href='/c/102/daily-practice'>Daily Practice</a> </li><li class='item'> <a href='/c/103/centers'>Centers</a> </li><li class='item'> <a href='/c/104/english-language-learners-ell'>English Language Learners (ELL)</a> </li><li class='item'> <a href='/c/105/early-learning'>Early Learning</a> </li><li class='item'> <a href='/c/107/test-prep'>Test Prep</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/98/language?specs=1405'>Book</a> </li><li class='item'> <a href='/c/98/language?specs=1841'>Courseware</a> </li><li class='item'> <a href='/c/98/language?specs=1509'>E-book</a> </li><li class='item'> <a href='/c/98/language?specs=1591'>Kit</a> </li></ul>"]
            }, {
                "title": "Writing",
                "href": "/c/108/writing",
                "group_html": ["<ul class='items'> <li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=250'>Grade PreK</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=251'>Grade K</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=252'>Grade 1</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=253'>Grade 2</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=254'>Grade 3</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=255'>Grade 4</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=256'>Grade 5</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=257'>Grade 6</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=258'>Grade 7</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=259'>Grade 8</a> </li></ul>", 
                "<ul class='items' style='display: block;'> <li class='item'> <a href='/c/109/basic-skills'>Basic Skills</a> </li><li class='item'> <a href='/c/110/nonfiction-forms'>Nonfiction Forms</a> </li><li class='item'> <a href='/c/111/spelling'>Spelling</a> </li><li class='item'> <a href='/c/112/handwriting'>Handwriting</a> </li><li class='item'> <a href='/c/113/daily-practice'>Daily Practice</a> </li><li class='item'> <a href='/c/114/centers'>Centers</a> </li><li class='item'> <a href='/c/115/early-learning'>Early Learning</a> </li><li class='item'> <a href='/c/220/fiction-forms'>Fiction Forms</a> </li></ul>", 
                "<ul class='items' style='display: block;'> <li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=1405'>Book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=1509'>E-book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/108/writing?specs=1591'>Kit</a> </li></ul>"]
            }, {
                "title": "Math",
                "href": "/c/117/math",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/117/math?specs=250'>PreK</a> </li><li class='item'> <a href='/c/117/math?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/117/math?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/117/math?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/117/math?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/117/math?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/117/math?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/117/math?specs=257'>Grade 6</a> </li><li class='item'> <a href='/c/117/math?specs=260'>Grade 6+</a> </li></ul>", 
                "<ul class='items' style='display: block;'> <li class='item'> <a href='/c/118/basic-skills'>Basic Skills</a> </li><li class='item'> <a href='/c/119/daily-practice'>Daily Practice</a> </li><li class='item'> <a href='/c/120/centers'>Centers</a> </li><li class='item'> <a href='/c/123/early-learning'>Early Learning</a> </li><li class='item'> <a href='/c/125/critical-thinking'>Critical Thinking</a> </li><li class='item'> <a href='/c/126/test-prep'>Test Prep</a> </li></ul>", 
                "<ul class='items' style='display: block;'> <li class='item'> <a href='http://www.evan-moor.com/c/117/math?specs=1405'>Book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/117/math?specs=1841'>Courseware</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/117/math?specs=1509'>E-book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/117/math?specs=1871'>Flashcards</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/117/math?specs=1591'>Kit</a> </li></ul>"]
            }, {
                "title": "Science",
                "href": "/c/127/science",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/127/science?specs=250'>PreK</a> </li><li class='item'> <a href='/c/127/science?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/127/science?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/127/science?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/127/science?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/127/science?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/127/science?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/127/science?specs=257'>Grade 6</a> </li><li class='item'> <a href='/c/127/science?specs=258'>Grade 7</a> </li><li class='item'> <a href='/c/127/science?specs=259'>Grade 8</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/128/science-literacy'>Science Literacy</a> </li><li class='item'> <a href='/c/129/daily-practice'>Daily Practice</a> </li><li class='item'> <a href='/c/130/centers'>Centers</a> </li><li class='item'> <a href='/c/131/hands-on-learning'>Hands-On Learning</a> </li><li class='item'> <a href='/c/132/interactive'>Interactive</a> </li><li class='item'> <a href='/c/133/early-learning'>Early Learning</a> </li><li class='item'> <a href='/c/134/english-language-learners-ell'>English Language Learners (ELL)</a> </li><li class='item'> <a href='/c/135/cross-curricular'>Cross-Curricular</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/127/science?specs=1405'>Book</a> </li><li class='item'> <a href='/c/127/science?specs=1841'>Courseware</a> </li><li class='item'> <a href='/c/127/science?specs=1509'>E-book</a> </li><li class='item'> <a href='/c/127/science?specs=1591'>Kit</a> </li></ul>"]
            }, {
                "title": "Social Studies",
                "href": "/c/193/social-studies",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/193/social-studies?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/193/social-studies?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/193/social-studies?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/193/social-studies?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/193/social-studies?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/193/social-studies?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/193/social-studies?specs=257'>Grade 6</a> </li><li class='item'> <a href='/c/193/social-studies?specs=260'>Grade 6+</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/194/geography'>Geography</a> </li><li class='item'> <a href='/c/195/cross-curricular'>Cross-Curricular</a> </li><li class='item'> <a href='/c/196/daily-practice'>Daily Practice</a> </li><li class='item'> <a href='/c/197/history'>History</a> </li></ul>", 
                "<ul class='items' style='display: block;'> <li class='item'> <a href='http://www.evan-moor.com/c/193/social-studies?specs=1405'>Book</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/193/social-studies?specs=1841'>Courseware</a> </li><li class='item'> <a href='http://www.evan-moor.com/c/193/social-studies?specs=1509'>E-book</a> </li></ul>"]
            }, {
                "title": "Teacher Resources",
                "href": "/c/136/teacher-resources",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/136/teacher-resources?specs=250'>PreK</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=257'>Grade 6</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=260'>Grade 6+</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/137/arts-crafts'>Arts &amp; Crafts</a> </li><li class='item'> <a href='/c/138/activity-books'>Activity Books</a> </li><li class='item'> <a href='/c/139/classroom-decor'>Classroom Decor</a> </li><li class='item'> <a href='/c/140/planning-books'>Planning Books</a> </li><li class='item'> <a href='/c/161/record-book'>Record Book</a> </li><li class='item'> <a href='/c/221/critical-and-creative-thinking-skills'>Critical and Creative Thinking Skills</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/136/teacher-resources?specs=1405'>Book</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=1841'>Courseware</a> </li><li class='item'> <a href='/c/136/teacher-resources?specs=1509'>E-book</a> </li></ul>"]
            }, {
                "title": "Parent Resources",
                "href": "/c/211/parent-resources",
                "group_html": ["<ul class='items'> <li class='item'> <a href='/c/211/parent-resources?specs=250'>PreK</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=251'>Grade K</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=252'>Grade 1</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=253'>Grade 2</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=254'>Grade 3</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=255'>Grade 4</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=256'>Grade 5</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=257'>Grade 6</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/212/daily-summer-activities'>Daily Summer Activities</a> </li><li class='item'> <a href='/c/213/never-bored-kid'>Never-Bored Kid</a> </li><li class='item'> <a href='/c/214/activity-books'>Activity Books</a> </li><li class='item'> <a href='/c/215/flashcards'>Flashcards</a> </li><li class='item'> <a href='/c/216/critical-creative-thinking-activities'>Critical &amp; Creative Thinking Activities</a> </li><li class='item'> <a href='/c/217/skill-sharpeners'>Skill Sharpeners</a> </li><li class='item'> <a href='/c/218/basic-skills'>Basic Skills</a> </li><li class='item'> <a href='/c/219/arts-crafts'>Arts &amp; Crafts</a> </li></ul>", 
                "<ul class='items'> <li class='item'> <a href='/c/211/parent-resources?specs=1405'>Book</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=1509'>E-book</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=1871'>Flashcards</a> </li><li class='item'> <a href='/c/211/parent-resources?specs=1591'>Kit</a> </li></ul>"]
            }];

            var index_of_title = function () {
                    for (var i = 0; i < nav_item_array.length; i++) {
                        if (nav_item_array[i].title.indexOf(parent_title) !== -1) {
                            //console.log(nav_item_array[i].title, parent_title);
                            return i;
                        }
                    }
            };
                ////console.log(parent_title,index_of_title());
            return nav_item_array[index_of_title()].group_html[nav_item_group_index];
        }
    };

    // run
    vwo_$(function () {
        //console.log('working');

        var add_html = (function () {
            // creates and adds the html to the nav
            // insert html into each nav item
            vwo_$('#main-nav').addClass('ti-nav'); // i had an unreasonable time on ie9 making decent selectors work
            vwo_$('#main-nav ul.first li > a').each(function (index) {
                var nav_item = vwo_$(this);
                var href = vwo_$(nav_item).attr('href');
                var title = vwo_$(nav_item).html();
                var icon_class = title.replaceAll(' ',"-").toLowerCase();
                var sub_nav_item_html = '<span class="sub-nav-title-container"><i class="icon icon-category icon-'+icon_class+'">';
                sub_nav_item_html += '</i><span class="sub-nav-title">' + title + '</span><i class="icon icon-caret"></i></span>';
                nav_item.html(sub_nav_item_html);

                var mega_nav_html = nav_maker.make_mega_nav(title, href);

                // //console.log('title:', title)
                // //console.log(mega_nav_html)

                vwo_$(nav_item).append(mega_nav_html);
                vwo_$(nav_item).addClass('mega-nav-trigger');

                vwo_$(nav_item).parent().parent().addClass('mega-nav-container');
            });

            vwo_$('#main-nav ul.first li.lastChild').after('<li><a class="all-subjects mega-nav-trigger" href="/t/curriculum"><span class="sub-nav-title-container">Browse all Subjects</span></a></li>');
        
            var bind_nav_events = (function (){
                vwo_$('.all-subjects').mouseover(function () {
                    vwo_$('.mega-nav-container').toggleClass('mega-nav-closed');
                }).mouseout(function () {
                    vwo_$('.mega-nav-container').toggleClass('mega-nav-closed');
                });
                vwo_$('.mega-nav a').click(function (event){
                    event.stopPropogation();
                });
                var is_tablet = ('ontouchstart' in window || navigator.maxTouchPoints) && screen.width > 700;
                if (is_tablet) {
                    vwo_$('li.first > a, a.mega-nav-trigger:not(.all-subjects)').click(function(e){
                        e.preventDefault();
                        this.toggle();
                        return false;
                    });
                   
                    vwo_$('.nav-group a, .nav-group-title').click(function (event) {
                        event.stopPropagation();
                        return true;
                    });
                }
            })();
        })();


        var edit_nav_items = (function () {
            // this function was just the easiest way to toggle doing this. 
            // grade categories that seem too abitrary and take up too much space are removed in design doc.
            vwo_$('.nav-group-grade .item > a:contains("6+")').parent().remove();
            vwo_$('.nav-group-grade .item > a:contains("Grade K")').parent().remove();

            // grade name PreK is replaced with "Pre-K"
            vwo_$('.nav-group-grade .item > a:contains("PreK")').each(function (){
                vwo_$(this).html('Pre-K');
            });

        })();
    });

    //console.log(vwo_$('.item'));
})();