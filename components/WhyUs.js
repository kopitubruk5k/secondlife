function WhyUs() {
    const features = [
        { icon: 'fas fa-shield-alt', title: 'Aman', subtitle: '(Escrow)' },
        { icon: 'fas fa-check-circle', title: 'Hernal', subtitle: '' },
        { icon: 'fas fa-leaf', title: 'Ranah Lingkungan', subtitle: '' },
        { icon: 'fas fa-certificate', title: 'Terverifikasi', subtitle: '' }
    ];

    return `
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <i class="fas fa-star text-yellow-500"></i>
                    Kenapa SecondLife?
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${features.map(feature => `
                        <div class="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                            <i class="${feature.icon} text-2xl text-green-600"></i>
                            <div>
                                <p class="font-semibold text-gray-900">${feature.title}</p>
                                ${feature.subtitle ? `<p class="text-sm text-gray-600">${feature.subtitle}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

document.getElementById('whyus').innerHTML = WhyUs();
