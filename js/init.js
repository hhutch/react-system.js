System.config({
    baseURL: 'js/lib',
    paths: { 'app/*': '/js/app/*.js',
	     'components/*': '/js/app/components/*.js' }
});
System.import('app/app').catch(function(e){setTimeout(function(){throw e;});});
