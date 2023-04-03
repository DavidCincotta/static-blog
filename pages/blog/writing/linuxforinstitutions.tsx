import Header from '../../../src/Header';
import Footer from '../../../src/Footer';
export default function LinuxForInstitutions() {
  const classStringText="indent-10"
  return (
    <>
      <Header />
          <div className="IndexMainContent w-screen md:w-95% pl-5 pr-5 p-1 text-lightTextPrimary dark:text-darkTextPrimary">
          <pre className="text-[8px] leading-[6px] text-center font-black">{`
888      d8b                                 8888888888                    8888888                   888    d8b 888             888    d8b                            
888      Y8P                                 888                             888                     888    Y8P 888             888    Y8P                            
888                                          888                             888                     888        888             888                                   
888      888 88888b.  888  888 888  888      8888888  .d88b.  888d888        888   88888b.  .d8888b  888888 888 888888 888  888 888888 888  .d88b.  88888b.  .d8888b  
888      888 888 "88b 888  888 'Y8bd8P'      888     d88""88b 888P"          888   888 "88b 88K      888    888 888    888  888 888    888 d88""88b 888 "88b 88K      
888      888 888  888 888  888   X88K        888     888  888 888            888   888  888 "Y8888b. 888    888 888    888  888 888    888 888  888 888  888 "Y8888b. 
888      888 888  888 Y88b 888 .d8""8b.      888     Y88..88P 888            888   888  888      X88 Y88b.  888 Y88b.  Y88b 888 Y88b.  888 Y88..88P 888  888      X88 
88888888 888 888  888  "Y88888 888  888      888      "Y88P"  888          8888888 888  888  88888P'  "Y888 888  "Y888  "Y88888  "Y888 888  "Y88P"  888  888  88888P' 
`}</pre>
            <br />
            <br />
            <div className="w-max mx-auto">
            <p className="text-center">The following is adapted from a research paper written at University.</p>
            </div>
            <br />
            <div className={classStringText}>
<p className="indent-0 text-3xl">Summary</p>
<br />
<br />
<p> Years ago, I switched to a Linux operating system for daily use. It was such a different and refreshing experience coming from Windows that I became slightly evangelical about it with my friends. Specifically what I enjoyed about it was the ease of programming, system management, and configurability that you get with a Linux distribution. </p>
<br />
<br />
<p> My research is definitely motivated by this personal experience: if I found Linux more gratifying, what does the research say about my choice of OS, and what are the concrete reasons for more individuals or companies avoiding it? </p>
<br />
<br />
<p> Since Linux is well known to be consistently less than 1% of desktop market share, the research on Linux in a desktop role is very lacking. Most research on IEEE and ACM was published around 2010 or relates to servers. According to that research, I identified other useful metrics to compare open source software, specifically Linux: its use and cost in data centers, and total ownership costs for institutions. </p>
<br />
<br />
<p> Because of this drought of information in the most popular technology journals, I switched to finding reputable articles through google scholar, and wikipedia cited sources. The only Source that is not a published article is one comparing the total cost of ownership: this seemed like too much of a business question to be well represented in academic research. </p>
<br />
<br />
<p> There are a few examples of public and private institutions documenting their migration from Windows to Linux[2][3]. These provide great examples for the benefits of open source, and the reasons to use proprietary software instead. I found a lot of information in the case of a migration from Windows to an early version of Linux over 2004 to 2014 located in Munich, Germany. This is the perfect example for why migration is difficult, and only has marginal, but measurable benefits. The project was named LiMux. Interestingly the migration was successful, but was revered back to Windows only three years later: the reason is highly suspected to be a deal between the Munich administration and Microsoft, as it was the same year that their new corporate headquarters for the EU was relocated to Munich. </p>
<br />
<br />
<p className="indent-0 text-3xl">Lower total cost of ownership for Open Source Software</p>
<br />
<br />
<p> Total cost of ownership is defined as the installation cost, and running costs of maintaining a system. TCO is a metric used for all types of corporate assets. Due to the implied scale of the networks, it is not applicable to individuals because individual costs are vastly different. </p>
<br />
<br />
<p> The calculation of TCO for any type of software is dominated by four things, the licensing cost, cloud deployment / installation, support plans, and staffing costs [4]. </p>
<br />
<br />
<p> Licensing: This is where Linux and other open source software immediately has a value proposition: there is no licensing cost for Linux, this is a distinct choice for commercial Linux distributions, it is their comparative advantage to be open source to provide a better product [1]. On the other hand, Microsoft charges thousands for Windows use in a datacenter [4]. </p>
<br />
<br />
<p> Support: There is no need to purchase a support plan with Linux, but if you are an institution, using an official version provided by open source companies like Red Hat or Canonical makes a lot of sense [1]. Microsoft support plans are measurably cheaper, due to the relative complexity of Linux as seen in finding section 2. Averaging support and licensing show about a 25% premium in favor of open source, even when using an optional support plan[4]. </p>
<br />
<br />
<p> Cloud: This is about the same premium for running an instance of Linux vs. Windows for the major cloud providers, but as the requested number of resources grows, the premium for Windows grows to over 70% [4]. </p>
<br />
<br />
<p> Staff: Since Linux and Windows servers require completely different skill sets and experience, their positions are not immediately interchangeable. Oftentimes new specialized employees need to be hired for a migration to Linux, this was the case with LiMux [2]. Leoni estimates that there is a 33% premium for Linux server administrators because more technical skill is required, this is somewhat offset since they manage larger systems on average [4]. </p>
<br />
<br />
<p className="indent-0 text-3xl">Individuals are already using the type of software they need</p>
<br />
<br />
<p> The core developers of the Linux project is currently the Open Source Software Foundation, but in the past it was computer scientists, academia, and network professionals who wanted a specialized operating system for stable and optimized use cases [1]. This shows that an important factor in switching to a Linux distribution is the need for stability and a strong development environment. </p>
<br />
<br />
<p> The finding that stability is important to open source software users was corroborated by Trapero in a survey on questions about their satisfaction with their current operating system [5]. Trapero also found that four factors were the most important to users: cost, stability, commercial support, and free support[5]. The main distinction between open and proprietary software is being free and  mainly free online technical support [5][6]. </p>
<br />
<br />
<p> The comparative advantage of proprietary software is that it has an abundance of commercial support: including documentation, technical support lines, ect. For most users of proprietary software like Windows, this is an important requirement [6]. </p>
<br />
<br />
<p> This shows the difference between open source and proprietary software users. One group simply has different needs than the other. Someone that needs technical support for a work laptop, or critical software like excel simply cannot put the extra effort into learning a new system that is inherently more complicated to do the same tasks that cannot be transferred without having technical troubles [2]. This is why most users are satisfied with their current operating system [5] and need to be impressed, find value, and have a good reason to switch to even consider it [6]. </p>
<br />
<br />
<p className="indent-0 text-3xl">Institutions have strong incentives to switch</p>
<br />
<br />
<p> There are multiple institutions who save a large portion of their IT budget because they decided to switch software packages using Linux with LibreOffice and other free software packages[2][3]. The first example is Munich as discussed in the summary. The total reported savings was $11 million, although this number is disputed by Microsoft[2]. The three main barriers that the government of Munich faced with the migration were convertibility, staff, and time. Many documents and processes had to be transferred to different formats before the transition could happen. The employees also had to be retrained, and new network administrators had to be hired to run the new system[2]. Obviously this took a lot of time to do well, but a year after the migrations, the employee reviews of the system were overall positive. </p>
<br />
<br />
<p> LiMux was a highly publicized migration. Other institutions have always been run in open source, or are much smaller. There is the case of Howard County Library in Maryland: instead of replacing over 300 old computers, they switched to Linux, extending the life of the machines, and eliminating licensing costs. This reportedly saved over $300,000 [3]. </p>
<br />
<br />
<p> The lesson from Howard County is that mid-sized institutions can save a lot of money from switching to open source. A Red Hat sales person stated that many US institutions are secretive about their internal use of Linux, as they see it as a competitive advantage[3]. Leoni showed the total cost of ownership is at a minimum, 20% lower than Windows companies [4]. For a highly advanced technology company, they could be saving a lot more using ‘in-house’ software. </p>
<br />
<br />
<p> I focused on the financial pressures that make open source software more appealing, but there is also an equally important need for a quality product that is reliable. It is a well known fact that Linux is far more stable in every setting, due to its robust system design[1][3]. This is the most important factor when it comes to running servers, and they need to remain online, for many months at a time. </p>
<br />
<br />
<p className="indent-0 text-3xl">Conclusion</p>
<br />
<br />
<p> I came into this research with a major bias towards Linux, and I had the right intuition on the total cost and institutional use cases for Linux. There seems to be a lot of supporting evidence that Linux is cheaper to use at the institutional level. The most damning thing about Linux and open source in general is that it is very complex even at the best of times. There is a good argument for using proprietary systems like Windows since you are saving pennies per hour by using Linux, while paying a team of people to manage it. There is definitely an appropriate type of company that can realize the benefits, without incurring all the costs of having to hire many highly skilled developers. </p>
<br />
<br />
<p> Where I had a change of heart was the notion that a much larger number of people would benefit from using Linux. After reading the about origins of Linux [1], the point about who were its main users before being picked up by corporations: the niche techies. The system is incredibly extendable, and free, but it comes at a heavy cost of learning something new and complicated. Even for other ‘power users’, it is an important option to have commercial support available to you, be it for important software like video editing, or enterprise level support which is more established for Windows. </p>
<br />
<br />
<p> It is important to distinguish that the migrations I talked about were for a full migration to Linux, as in the modern setting, upwards of 80% of all servers run some distribution of Linux. It truly is a fact that it has very tangible benefits over Windows, but they just are not as important on desktop settings </p>
<br />
<br />
<p> In conclusion, modern servers should always run a Linux operating system, unless its impossible to run software outside of a windows environment. As for Linux desktop, it is and will forever remain a niche environment only widely adopted by developers who are already using Linux on servers extensively. This could change if more institutions like the Howard County Library and the San Diego School System [3] continue using and promoting Linux. </p>
<br />
<br />
<p className="text-[9px]"> [1] J. West and J. Dedrick, "Proprietary vs. open standards in the network era: an examination of the Linux phenomenon," Proceedings of the 34th Annual Hawaii International Conference on System Sciences, 2001, pp. 10 pp.-, doi: 10.1109/HICSS.2001.926525. link </p>
<p className="text-[9px]"> [2] M. Silic and A. Back, "Open Source Software Adoption: Lessons from Linux in Munich," in IT Professional, vol. 19, no. 1, pp. 42-47, Jan.-Feb. 2017, doi: 10.1109/MITP.2017.7. link </p>
<p className="text-[9px]"> [3] Gray, James. “Linux and the Enterprise Desktop: Where Are We Today?” ACM, 2008, doi:10.5555/1388219.1388226. link </p>
<p className="text-[9px]"> [4] Leoni, Ken. “Linux vs Windows – a Cost Comparison.” Heroix, 16 May 2018, link </p>
<p className="text-[9px]"> [5] Dhir, Swati, and Sanjay Dhir. “Adoption of Open-Source Software versus Proprietary Software: An Exploratory Study.” Strategic Change, no. 4, Wiley, July 2017, pp. 363–71. Crossref, doi:10.1002/jsc.2137. link </p>
<p className="text-[9px]"> [6] Trapero, Hazel & Leano, Cecilia & Caguiat, Marowena. (2019). Value-based Adoption of Open-Source Software in Higher Education: An Empirical Investigation.  link </p>
            </div>
          </div>
          <br />
          <br />
          <Footer />
	</>
  );
}
