import Header from '../../src/Header';
import Footer from '../../src/Footer';
import { LineChart, AnimatedBarChart } from '../../src/Charts';
import { riffleData, hinduData, riffleStraightsInGame, riffleStraightsReal, histogramDataHindu } from '../../src/ChartData';
import CodeBlock from '../../src/CodeBlock';
import * as CustomSVG from '../../src/CustomSVG';
import { hinduCode, riffleCode, getEntropyCode, cardshuffle } from '../../src/TextData';

function closepreview() {
  const preview = document.getElementById('preview')!;
  preview.classList.remove('opacity-100');
  preview.classList.add('opacity-10');
  preview.classList.remove('mobile:h-[200px]');
  preview.classList.add('mobile:h-[0px]');
}
function showpreview(gif: string) {
  const previewText = document.getElementById('previewText')!;
  previewText.classList.replace('opacity-100', 'opacity-0')
  const preview = document.getElementById('preview')!;
  preview.classList.remove('bg-[url("/riffle.gif")]')
  preview.classList.remove("bg-[url('/riffle.gif')]")
  preview.classList.remove('bg-[url("/hindu.gif")]')
  preview.classList.remove('bg-[url("/overhand.gif")]')
  preview.classList.remove('bg-[url("/cut.gif")]')
  preview.classList.remove('bg-[url("/faro.gif")]')
  preview.classList.add(`bg-[url("/${gif}")]`);
  preview.classList.remove('opacity-10');
  preview.classList.add('opacity-100');
  preview.classList.remove('translate-y-1/2');
  preview.classList.add('translate-y-0');
  preview.classList.remove('mobile:h-[0px]');
  preview.classList.add('mobile:h-[200px]');
};
export default function CardSim() {
  return (
    <>
      <Header />
      <div className="flex items-center transition duration-300 w-screen justify-center text-black dark:text-white">
        <div id="maingrid" className="grid grid-cols-10 gap-0 w-[95vw] content-center self-center">
          <pre className="col-start-2 col-end-10 place-self-center text-[6px] overflow-scroll mobile:text-[2px] font-extrabold">{cardshuffle}</pre>
          <div id="intro" className="col-span-7 mobile:col-span-10">
            <br /> <br />
            <p>
						Have you ever experienced those poker nights where straights or higher appeared every other hand? On such occasions, I've walked away from the table cursing the dealer for not shuffling enough. But even so, how are four straights in a row statistically possible?
						</p>
            <br />
            <p>
						The goal of this project is to understand the phrase: "seven riffle shuffles are enough to perfectly shuffle a deck of cards." In the real world, expecting seven shuffles for every hand of poker is far too much. Furthermore, poor technique and alternative shuffling methods are all too common in home games.
						</p>
            <br />
            <p>
						This challenge is difficult to solve with combinatorics, but I will introduce some relevant equations to gauge the accuracy of the simulations. Some of the programs are written in C++, while others are in Python 3. These are all relatively simple simulations, but I got tired of writing boilerplate code in C++ and realized Jupyter Notebook was a better environment for this project.
						</p>
            <br />
            <p>Lets get started with some of the most common card shuffling techniques:</p>
            <br />
          </div>
          <div className="col-start-2 col-span-11">
            <div className="col-start-2 mobile:col-start-2 mobile:col-end-10 col-end-6">
              <br />
              <br />
              <ol className="list-decimal">
                <li><a className="mouseClose" onMouseEnter={() => { showpreview("riffle.gif") }} onMouseLeave={closepreview}>Riffle</a>: Interweave two packs of cards</li>
                <br />
                <li><a className="mouseClose" onMouseEnter={() => { showpreview("hindu.gif") }} onMouseLeave={closepreview}>Hindu</a> and <a className="mouseClose" onMouseEnter={() => { showpreview("overhand.gif") }} onMouseLeave={closepreview}>Overhand</a>: Move a packet from one hand, to the bottom of a new stack in the other.</li>
                <br />
                <li><a className="mouseClose" onMouseEnter={() => { showpreview("cut.gif") }} onMouseLeave={closepreview}>Cut</a>: Split the deck and place one stack on the other.</li>
                <br />
                <li><a className="mouseClose" onMouseEnter={() => { showpreview("faro.gif") }} onMouseLeave={closepreview}>Faro</a>: Resembles a riffle shuffle, but every card is interwoven perfectly.</li>
              </ol>
              <br />
              <br />
            </div>
            <div id="preview" className="transition rounded-[10px] sepia duration-300 opacity-100 bg-center bg-cover h-[40vh] w-[70vh] mobile:col-start-2 mobile:col-end-10 mobile:h-[0px] mobile:delay-200 m-5 mobile:h-[300px] overflow-hidden bg-black text-white m-6 pt-[60px] pl-[60px] text-2xl ">
              <p id="previewText" className="opacity-100 transition duration-300">Desktop: Hover links to see shuffle examples <br /><br /> Mobile: Click</p>
            </div>
          </div>
          <div className="col-span-7 mobile:col-span-10">
            <p className="text-3xl">Simulation Parameters, Sample Sizes and Optimization</p>
            <p>
						A difficulty with this type of simulation is obtaining a large enough sample size. Because there are two parameters in this simulation—shuffle quality and number of shuffles—the total number of simulations becomes multiplicative and, consequently, costly. I've managed to keep all the runs under one hour in length, with the express goal of exceeding the number of samples needed to reach statistical significance. I will demonstrate how to calculate the statistically required number of runs, but to produce visually appealing graphs, I always surpass this.
						</p>
            <br />
            <p>
						A note on optimization: Every shuffle can be executed in O(deck = 52) time complexity. There might be some minor optimization possible for these functions, but is it worth the effort? Multithreading only yielded around a 6x speedup on 8 cores. Perhaps a clean 8x speedup would be achievable if locking/shared memory was eliminated.
						</p>
            <br />
            <p>
						I will discuss how the mechanics of card shuffling techniques impact the distribution of cards in the deck, the overall deck randomness, and how this results in skewed probabilities in real table games.
						</p>
          </div>
          <div className="col-span-7 mobile:col-span-10">
            <br /> <br />
            <p className="text-3xl">Riffle Analysis</p>
            <br /> <br />
          </div>
          <div className="col-start-2 col-end-8 mobile:col-start-2 mobile:col-end-10"> <br /> <CodeBlock addClass="overflow-scroll mobile:w-auto" lang="cpp" text={riffleCode} /> </div>
          <br />
          <div className="col-span-7 mobile:col-span-10">
            <br />
            <p>
						Now we can run this simulation for a single deck 15 times, then repeat that simulation for a few hundred thousand runs to guarantee statistical significance.
						</p>
            <br />
            <p>A few notes about how the simulation and analysis are performed:</p>
            <br />
          </div>
          <div className="col-start-2 mobile:col-start-2 mobile:col-end-10 col-end-6">
            <ol className="list-decimal">
              <li>Iteration: An individual deck after a certain number of shuffles</li>
              <br />
              <li>X-Axis: number of shuffle iterations</li>
              <br />
              <li>Y-Axis: average possition on a particular iteration</li>
              <br />
              <li>Runs per iteration: ~210,000</li>
              <br />
              <li>Total shuffles in simulation: 3.2 million</li>
              <br />
              <li>Y1-Axis: number from range 0 to max entropy</li>
              <br />
              <li>Entropy: information theory concept which measures the of randomness of a set. This is the standard method to measure randomness in a deck of cards.</li>
              <br />
              <div className="dark:fill-textDarkPrimary">{CustomSVG.entropy}</div>
              <br />
              <CodeBlock addClass="overflow-scroll mobile:w-auto" text={getEntropyCode} lang="cpp" />
              <br /> <br />
            </ol>
          </div>
          <div className="col-start-1 col-span-7 mobile:col-span-10">
            <p>
						For a deck of 52 cards, a fully randomized deck using the fisher-yates shuffle will average around a 3.3 entropy score. This number does not have any units so its only scale is against 0 and itself.
						</p>
            <br />
            <p>
						For example, a larger deck naturally contains more information, so its entropy while shuffled is higher. With N=1000, maximum entropy increases to ~6.41, as the scale is logerithmic.
						</p>
            <br />
            <p></p>
            <br /> <br />
          </div>
          <div id="RiffleChart" className="col-span-10 p-2 w-3/4 mobile:w-[95%] place-self-center outline outline-black dark:outline-white outline-2 outline-offset-8 rounded-[10px] h-fit"> <LineChart title="Card Position" data={riffleData} y1title="test" /> </div>
          <div className="col-start-1 col-span-7 mobile:col-span-10">
            <br /> <br /> <br />
            <p>The average position of the first card to be a good approximator for how random the deck is, since it can also contain more information than a simple scalar value. Our large sample size allows us to utilize the law of large numbers and make inferences with high confidence when a particular pattern is found.</p>
            <br />
            <p>The next graph shows how the riffle shuffle impacts games based on two parameters: packet size, and iteration count.</p>
            <br />
          </div>
          <div className="col-start-2 mobile:col-start-2 mobile:col-end-10 col-end-8">
            <ol className="list-disc">
              <br />
              <li>X-Axis: number of shuffle iterations</li>
              <br />
              <li>Y-Axis: probability of a straight happening in game</li>
              <br />
              <li className="list-none">Notes: Lighter colors represent a high max packet parameter which represent 'looser' or 'worse' riffle shuffles. Darker  colors are clean riffle shuffles, with a tighter spread, see the above example.</li>
              <br />
              <li>Both Charts: 5 players, 5 card board, 2 card hands</li>
              <br />
              <li>Chart 1: "New Deck Start", a completely fresh deck, new out of the box</li>
              <br />
              <li className="list-none">Example:</li>
              <li className="list-none">[0, 1, 2, 3, 4, 5, 6, 7, ... 49, 50, 51]</li>
              <li className="list-none">Notes: Unrealistic, but worst case scenario.</li>
              <br />
              <li>Chart 2: "Rigged Start", There are 5 cards in a row, while the rest of the deck is random</li>
              <br />
              <li>This situation more closely represents this common situation: a player who wins a hand with a straight may put their cards on the flop, and this pack of cards gets shuffled into the deck.</li>
              <br />
              <li className="list-none">Example:</li>
              <li className="list-none flex">[7, 12,<p className="dark:text-green text-red font-bold">&nbsp;0, 1, 2, 3, 4,</p>&nbsp;9, ... 12, 5, 2]</li>
              <li className="list-none">Notes: I am only keeping track of straights, only ranks need to be tracked.</li>
              <br />
              <li>1,000,000 runs per data point</li>
            </ol>
            <br />
            <br />
            <br />
          </div>
          <div id="New Deck Start" className="h-fit col-span-10 p-2 w-[80vw] mobile:w-[95%] place-self-center outline outline-black dark:outline-white outline-2 outline-offset-8 rounded-[10px] "> <LineChart yaxis="P(S>0|N-D)" showLegend={true} xaxis="Shuffle Iterations" title="New Deck Start" data={riffleStraightsInGame} /> </div>
          <div className="col-span-7 mobile:col-span-10">
            <br />
            <p className="text-sm text-center mt-2">The chart is interactive, click the "1" dataset in the legend to hide it.</p>
            <br />
						<p className="text-2xl">Outliers and Quantum Wave Theory?</p>
            <p>
						Notice how much of an outlier the shuffle with MaxPacket=1 is. This shuffle is equivalent to the Faro shuffle, where every card is interleaved perfectly, definitively showing that the Faro shuffle is deterministic and should not be used for real-world shuffling. A side note: closely observe card magicians, this shuffle appears frequently because it is deterministic and makes it easier to force cards.
						</p>
            <br />
            <p>
						The red line in this graph represents a perfectly shuffled deck, replacing a riffle shuffle with the Fisher-Yates algorithm. The first thing to notice is how the lighter, worse shuffles take much longer to converge to the expected value of straights. This is easily explained by the mechanics of the shuffle: with larger packet sizes, you may miss breaking up the straight, making it more likely in all subsequent runs.
						</p>
            <br />
            <p>
						One thing I have trouble explaining is the sudden dip in probability below the expected value. I don't understand the mechanics of why this happens, but it is repeated in all of the attempts I made.
						</p>
            <br />
            <p>Rationalizing Error with Waves (Conjecture)</p>
            <br />
            <p>
						The first thing to know is that this simulation is limited and has strict parameters. Real-world shuffles have a lot more variation that cannot be explained by "MinPackets" and "MaxPackets" as described in the implementations. For simulations that are bounded by strict rules, such as this one, wave functions could provide a mathematical grounding for the result.
						</p>
            <br />
            <p><a href="https://en.wikipedia.org/wiki/Wave_function">Quantum waves</a> are essentially probability distribution functions for fundamental particles such as photons. This theory has been applied to computational processes like terrain generation. Imagine one shuffle moves the cards around according to a sine wave, and multiple shuffles move cards based on the combinations of those waves. In theory, it would be possible to construct a wave function for a certain type of shuffle and use that function to predict the distribution of cards at a specific number of shuffles. This is more interesting because you could combine multiple types of shuffles in this fashion to predict the distribution of cards when combining Riffle and Hindu shuffles.</p>
            <br />
						<p><i>Hypothesis: Given a set of well defined shuffling algorithms, you can calculate the probility distribution for every element by multiplying the 'Wave fucntion' in a non-commutative operation.</i></p>
            <br />
            <br />
            <br />
          </div>
          <div id="Rigged Start" className="h-fit col-span-10 p-2 w-[80vw] mobile:w-[95%] place-self-center outline outline-black dark:outline-white outline-2 outline-offset-8 rounded-[10px] "> <LineChart yaxis="P(S>0|1-S)" showLegend={true} xaxis="Shuffle Iterations" title="Rigged Start" data={riffleStraightsReal} /> </div>
          <div className="col-span-7 mobile:col-span-10">
            <br />
            <br />
            <br />
            <p>
						Even in a "mostly" randomized deck, the deterministic nature of the Faro shuffle demonstrates that it distorts the asymptotic behavior of this shuffling algorithm.
						</p>
            <br />
            <p>Even with this outlier remved (interact with the legend), we still observe this strange dip in straight probability with <i>Iterations</i>=2. Comparing this to the entropy graph, we can see that all types of shuffles eventually converge to a probability of about 4% with no strange deviation. This is close to the expected for a <a href="https://en.wikipedia.org/wiki/Poker_probability#7-card_poker_hands">7-card poker hand</a> which makes me believe this simulation is a good approximation for real games.</p>
          </div>
          <div className="col-span-7 mobile:col-span-10">
            <br /> <br />
            <p className="text-3xl">Hindu Analysis</p>
          </div>
          <div className="col-start-2 col-end-8 mobile:col-start-2 mobile:col-end-10"> <br /> <CodeBlock addClass="overflow-scroll mobile:w-auto" lang="cpp" text={hinduCode} /> </div>
          <div className="col-span-7 mobile:col-span-10">
            <br />
            <p>Keep in mind that the hindu and overhand shuffles are equivalent in terms of how the cards are being cycled. This simulation has 10,000,000 individual shuffles, with 1,000 iterations. This one took a while to run, and resulted in very large files as every result was saved. The representation of the results was quite challenging because of how much data was generated.</p>
            <br />
            <br />
          </div>
          <div id="HinduChart" className="col-span-10 p-2 w-3/4 mobile:w-[95%] place-self-center outline outline-black dark:outline-white outline-2 outline-offset-8 rounded-[10px] h-fit"> <LineChart title="Hindu shuffle 1000 Iterations" xaxis="Shuffle Iterations" yaxis="Card Position" data={hinduData} /> </div>
          <div className="col-span-7 mobile:col-span-10">
            <br /> <br />
            <p>
						Pay attention to the 1st, 8th, and 16th cards and how their iteration numbers always maintain the same parity (even/odd). This can be explained by the mechanics of how the Overhand shuffle works. Since you are moving packets of cards to the bottom, the first shuffle slightly randomizes the order but absolutely reverses the typical ordering of the deck, only to be swapped back to a similar starting position on the next shuffle. This stratification effect is observed at all packet sizes but is most visible in low numbers. Simply adding more variability to the packet size results in faster convergence to a truly random deck.
						</p>
            <br />
            <p>
						There is no entropy field in this specific dataset, but the standard entropy calculation will not capture this detail about parity swapping.
						</p>
            <br />
            <p>
						To visually demonstrate why you should never use an Overhand or Hindu shuffle in any games where you care about randomness, take a look at how the first card travels through parts of the deck over the course of 15 shuffles:
						</p>
            <br />
            <br />
          </div>
          <br />
          <br />
          <div id="hinduHistogramData" className="col-span-10 p-2 w-3/4 mobile:w-[95%] place-self-center outline outline-black dark:outline-white outline-2 outline-offset-8 rounded-[10px] h-fit"> <AnimatedBarChart data={histogramDataHindu} title="First Card Distribution: 0 Shuffles" xaxis="Card Position" yaxis="Frequency" showLegend={false} showTooltip={false} /> </div>
          <div className="col-span-7 mobile:col-span-10">
            <br />
            <br />
            <br />
            <p className="text-3xl">Conclusion</p>
            <br />
            <p>It is save to say that the mathematicians were right in recommending 7 Riffle shuffles. What they didn't say was how that assumption can fall apart with mediocre technique. I will add more common shuffling techniques and more in depth analysis in the future.</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
