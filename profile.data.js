(function(){
	var options = {
		bezierCurve: false,
		datasetFill: false
	};

	var DataRef = function() {
		this.labels = ["50","100","150","200","250","300","350","400","450","500"];
		this.datasets = [
			{
				strokeColor : "rgba(90,205,90,1)",
				pointColor : "rgba(90,205,90,1)",
				pointStrokeColor : "#0"
			},
			{
				strokeColor : "rgba(90,1,205,1)",
				pointColor : "rgba(90,1,205,1)",
				pointStrokeColor : "#0"
			}
		];
	};

	var acpAvg = [14,28,40,140,218,280,428,422,446,512],
		acpMed = [3,27,38,144,211,310,473,468,496,562],
		aczAvg = [2,75,180,248,292,431,498,690,770,866],
		aczMed = [2,77,180,243,325,451,537,735,812,903],
		cpmAvg = [57,31,140,295,328,407,507,621,802,737],
		cpmMed = [55,28,127,316,360,437,547,669,858,755],
		dmiAvg = [14,30,126,186,298,446,626,655,799,837],
		dmiMed = [11,31,127,184,317,484,673,695,826,837],
		fecAvg = [8,14,57,137,244,368,445,634,602,729],
		fecMed = [7,9,59,149,269,396,496,687,647,750],
		minAvg = [4,13,73,176,278,333,505,524,673,759],
		minMed = [4,10,86,179,314,365,553,564,712,774],
		mipAvg = [2,9,75,178,257,349,439,567,624,812],
		mipMed = [2,3,73,191,303,387,482,619,649,851],
		misAvg = [2,5,72,146,264,345,443,490,694,672],
		misMed = [2,2,70,154,280,382,499,536,755,707],
		ocgAvg = [5,73,195,344,380,561,708,751,899,1013],
		ocgMed = [3,68,223,364,409,599,737,792,943,1053],
		oisAvg = [2,7,51,156,327,341,442,495,655,765],
		oisMed = [2,3,43,181,343,376,481,536,702,823],
		otpAvg = [3,9,56,186,226,332,418,554,672,685],
		otpMed = [2,5,57,197,265,362,457,609,739,713],
		scdAvg = [2,4,27,121,186,316,437,538,653,637],
		scdMed = [2,2,26,118,205,338,488,592,685,677],
		tcgAvg = [2,23,51,157,239,324,454,559,657,808],
		tcgMed = [2,17,51,156,261,369,515,621,715,855];
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

		acp.datasets[0].data = acpAvg;
		acp.datasets[1].data = acpMed;

		acz.datasets[0].data = aczAvg;
		acz.datasets[1].data = aczMed;

		cpm.datasets[0].data = cpmAvg;
		cpm.datasets[1].data = cpmMed;

		dmi.datasets[0].data = dmiAvg;
		dmi.datasets[1].data = dmiMed;

		fec.datasets[0].data = fecAvg;
		fec.datasets[1].data = fecMed;

		min.datasets[0].data = minAvg;
		min.datasets[1].data = minMed;

		mip.datasets[0].data = mipAvg;
		mip.datasets[1].data = mipMed;

		mis.datasets[0].data = misAvg;
		mis.datasets[1].data = misMed;

		ocg.datasets[0].data = ocgAvg;
		ocg.datasets[1].data = ocgMed;

		ois.datasets[0].data = oisAvg;
		ois.datasets[1].data = oisMed;

		otp.datasets[0].data = otpAvg;
		otp.datasets[1].data = otpMed;

		scd.datasets[0].data = scdAvg;
		scd.datasets[1].data = scdMed;

		tcg.datasets[0].data = tcgAvg;
		tcg.datasets[1].data = tcgMed;

		console.log(otp);

        new Chart(
        		document.getElementById('acp-profile').getContext('2d')
        	).Line(acp,options);
        new Chart(
        		document.getElementById('acz-profile').getContext('2d')
        	).Line(acz,options);
        new Chart(
        		document.getElementById('cpm-profile').getContext('2d')
        	).Line(cpm,options);
        new Chart(
        		document.getElementById('dmi-profile').getContext('2d')
        	).Line(dmi,options);
        new Chart(
        		document.getElementById('fec-profile').getContext('2d')
        	).Line(fec,options);
        new Chart(
        		document.getElementById('min-profile').getContext('2d')
        	).Line(min,options);
        new Chart(
        		document.getElementById('mip-profile').getContext('2d')
        	).Line(mip,options);
        new Chart(
        		document.getElementById('mis-profile').getContext('2d')
        	).Line(mis,options);
        new Chart(
        		document.getElementById('ocg-profile').getContext('2d')
        	).Line(ocg,options);
        new Chart(
        		document.getElementById('ois-profile').getContext('2d')
        	).Line(ois,options);
        new Chart(
        		document.getElementById('otp-profile').getContext('2d')
        	).Line(otp,options);
        new Chart(
        		document.getElementById('scd-profile').getContext('2d')
        	).Line(scd,options);
        new Chart(
        		document.getElementById('tcg-profile').getContext('2d')
        	).Line(tcg,options);
})();