

function runSim(){
	
	var probArray = [[.64, .32, .04], [.4,.5,.1], [.25,.5,.25]];

	var currentState = 0;
	var stateTotals = [0,0,0];
	var currentRandomNumber = 0;

	for(var i = 0; i < 10000; i++)
	{
		currentRandomNumber = Math.random();

		if(currentRandomNumber < probArray[currentState][0])
		{
			currentState = 0;
			stateTotals[0]++;
		}
		else if(currentRandomNumber < probArray[currentState][1]+probArray[currentState][0])
		{
			currentState = 1;
			stateTotals[1]++;
		}
		else
		{
			currentState = 2;
			stateTotals[2]++;
		}


	}
	
	printToScreen(stateTotals);
}


function printToScreen(stateTotals)
{

	$('#state0').val(stateTotals[0]);
	$('#state1').val(stateTotals[1]);
	$('#state2').val(stateTotals[2]);

}