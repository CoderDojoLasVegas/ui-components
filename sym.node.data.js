(function(){
	var options = {
		bezierCurve: false,
		datasetFill: false
	};

	var DataRef = function() {
		this.labels = ["Average","Median"];
		this.datasets = [
			{
				fillColor: "rgba(90,205,90,.5)",
				strokeColor : "rgba(90,205,90,1)",
				pointColor : "rgba(90,205,90,1)",
				pointStrokeColor : "#0"
			},
			{
				fillColor: "rgba(90,1,205,.5)",
				strokeColor : "rgba(90,1,205,1)",
				pointColor : "rgba(90,1,205,1)",
				pointStrokeColor : "#0"
			}
		];
	};

	var acpSym = [9726,10429],
		acpNod = [2,2],
		aczSym = [10473,10538],
		aczNod = [2,2],
		cpmSym = [9274,10359],
		cpmNod = [1,2],
		dmiSym = [8778,9733],
		dmiNod = [2,2],
		fecSym = [9634,10338],
		fecNod = [3,2],
		minSym = [8974,15472],
		minNod = [3,3],
		mipSym = [8235,9096],
		mipNod = [3,3],
		misSym = [8886,9654],
		misNod = [2,2],
		ocgSym = [9462,10323],
		ocgNod = [3,3],
		oisSym = [9666,10347],
		oisNod = [2,2],
		otpSym = [9549,10640],
		otpNod = [3,3],
		scdSym = [9246,10453],
		scdNod = [3,3],
		tcgSym = [9521,10381],
		tcgNod = [2,2];
		var acp = new DataRef(),
			acz = new DataRef(),
			cpm = new DataRef(),
			dmi = new DataRef(),
			fec = new DataRef(),
			min = new DataRef(),
			mip = new DataRef(),
			mis = new DataRef(),
			ocg = new DataRef(),
			ois = new DataRef(),
			otp = new DataRef(),
			scd = new DataRef(),
			tcg = new DataRef();

		acp.datasets[0].data = acpSym;
		acp.datasets[1].data = acpNod;

		acz.datasets[0].data = aczSym;
		acz.datasets[1].data = aczNod;

		cpm.datasets[0].data = cpmSym;
		cpm.datasets[1].data = cpmNod;

		dmi.datasets[0].data = dmiSym;
		dmi.datasets[1].data = dmiNod;

		fec.datasets[0].data = fecSym;
		fec.datasets[1].data = fecNod;

		min.datasets[0].data = minSym;
		min.datasets[1].data = minNod;

		mip.datasets[0].data = mipSym;
		mip.datasets[1].data = mipNod;

		mis.datasets[0].data = misSym;
		mis.datasets[1].data = misNod;

		ocg.datasets[0].data = ocgSym;
		ocg.datasets[1].data = ocgNod;

		ois.datasets[0].data = oisSym;
		ois.datasets[1].data = oisNod;

		otp.datasets[0].data = otpSym;
		otp.datasets[1].data = otpNod;

		scd.datasets[0].data = scdSym;
		scd.datasets[1].data = scdNod;

		tcg.datasets[0].data = tcgSym;
		tcg.datasets[1].data = tcgNod;

		console.log(otp);

        new Chart(
        		document.getElementById('acp-compare').getContext('2d')
        	).Bar(acp,options);
        new Chart(
        		document.getElementById('acz-compare').getContext('2d')
        	).Bar(acz,options);
        new Chart(
        		document.getElementById('cpm-compare').getContext('2d')
        	).Bar(cpm,options);
        new Chart(
        		document.getElementById('dmi-compare').getContext('2d')
        	).Bar(dmi,options);
        new Chart(
        		document.getElementById('fec-compare').getContext('2d')
        	).Bar(fec,options);
        new Chart(
        		document.getElementById('min-compare').getContext('2d')
        	).Bar(min,options);
        new Chart(
        		document.getElementById('mip-compare').getContext('2d')
        	).Bar(mip,options);
        new Chart(
        		document.getElementById('mis-compare').getContext('2d')
        	).Bar(mis,options);
        new Chart(
        		document.getElementById('ocg-compare').getContext('2d')
        	).Bar(ocg,options);
        new Chart(
        		document.getElementById('ois-compare').getContext('2d')
        	).Bar(ois,options);
        new Chart(
        		document.getElementById('otp-compare').getContext('2d')
        	).Bar(otp,options);
        new Chart(
        		document.getElementById('scd-compare').getContext('2d')
        	).Bar(scd,options);
        new Chart(
        		document.getElementById('tcg-compare').getContext('2d')
        	).Bar(tcg,options);
})();