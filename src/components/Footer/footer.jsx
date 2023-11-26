import React,{ Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react';
import { lang,english } from '../../assets/index';
const Footer = () => {

  return ( 
	 <footer className="p-6 lg:p-0 divide-y w-full bg-secondary-blue text-white dark:text-gray-100">
	<div className="container flex flex-col bg-secondary-blue justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
		<div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
           
           <span className="ml-2 text-xl font-bold tracking-wide">
  <span className="text-white uppercase">Actors</span>
  <span className="text-secondary-yellow uppercase">Index</span>
</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
			If you’re after a job in the film, TV and entertainment industry 
			or have business services to offer, create a profile, post opportunities and find what you need.


            </p>
			
          </div>
        </div>
		</div>
		
		<div className="grid grid-cols-2  text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3 ">
				<h3 className="tracki uppercase dark:text-gray-50 font-bold">Finding Jobs</h3>
				<ul className="space-y-2">
					<li>
						<a rel="noopener noreferrer" href="#">Actors

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Extras
</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Editors
</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Actors

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Camera

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Audio

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Voiceover

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Dancers


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Other Crew

</a>
					</li>

				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase font-bold dark:text-gray-50">Company</h3>
				<ul className="space-y-3">
					<li>
						<a rel="noopener noreferrer" href="#">Financial Services


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Equipment hire

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Locations

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Special Effects

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Props


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Stunts



</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Studios


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Production Companies


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">
Film Schools


</a>
					</li>

				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase font-bold dark:text-gray-50">About Us</h3>
				<ul className="space-y-2">
					<li>
						<a rel="noopener noreferrer" href="#">Media Centre 



</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Legal

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms & Conditions 

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Privacy Policy 


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Cookie Policy 


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Cyber Security 


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Bug Hunter 

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQs 



</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Contact Us


</a>
					</li>

				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase font-bold dark:text-gray-50">Company</h3>
				<ul className="space-y-3">
					<li>
						<a rel="noopener noreferrer" href="#">Financial Services


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Equipment hire

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Locations

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Special Effects

</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Props


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Stunts



</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Studios


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Production Companies


</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">
Film Schools


</a>
					</li>

				</ul>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">Actors Index Pty Ltd. ABN 123456789 Copyright ©2024. All Rights Reserved. Sitemap.</div>
</footer>
  
  )
}

export default Footer
