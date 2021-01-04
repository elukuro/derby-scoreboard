<script>
    
</script>
<main class="help">
    <h1>Bantuan ?</h1>
    <ul>
        <li>
            <span class="qna">Pertanyaan:</span>
                <h3>Bagaimana caranya Sync data Strava ke Derby running distance challenge ?</h3>
            <span class="qna">Jawaban:</span>
                <ol>
                    <li>
                        <span>untuk dapat sync data ke DRDC anda perlu memastikan bahwa aktifitas yang ada di strava bersifat public, langkahnya sebagai berikut:
                            <ol>
                                <li>Pilih setting (tiga titik sejajar di pojok kanan atas)</li>
                                <li>pilih edit</li>
                                <li>scroll ke bawah dan pilih privacy control </li>
                                <li>pilih Everyone</li>
                                <li>tekan save (pojok kanan atas)</li>
                            </ol>
                        </span>
                    </li>
                    <li><span>Langkah selanjutnya buka microsite Derby running distance challenge dan tekan tombol sync</span></li>
                    <li><span>Kemudian login dengan menggunakan akun strava anda</span></li>
                    <li><span>Pada halaman authorize tekan tombol authorize</span></li>
                    <li><span>Jika proses sync berhasil, anda akan kembali ke halaman microsite Derby running distance challenge dengan informasi klasemen anda</span></li>
                    
                </ol>
        </li>
        <li>
            <span class="qna">Pertanyaan:</span>
                <h3>Apa itu Year to date dan Recent 4 weeks</h3>
            <span class="qna">Jawaban:</span>
                <ol>
                    <li>
                        <span>Year to date adalah klasemen yang diambil dari Awal tahun berjalan ke hari ini</span>
                    </li>
                    <li>
                        <span>Recent 4 weeks adalah klasemen yang diambil di empat minggu terakhir</span>
                    </li>
                </ol>
                <span>Catatan: diharapkan untuk rutin melakukan sync agar data yang ada selalu up-to-date</span>
        </li>
        <li>
            <span class="qna">Pertanyaan:</span>
                <h3>Kenapa saya gagal sync ?</h3>
            <span class="qna">Jawaban:</span>
                <ol>
                    <li>
                        <span>Bersihkan cache & cookies (<a href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=id">cara membersihkan cache dapat dilihat disini</a>) yang ada di browser atau bisa juga dengan membuka microsite menggunakan mode incognito dan coba sync kembali <a href="https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DAndroid&hl=id" target="_blank">cara membuka incognito dapat dilihat disini</a> </span>
                    </li>
                    <li><span>Jika masih tidak bisa silahkan hubungi admin atau chat di WAG derby</span></li>
                </ol>
        </li>
    </ul>
    <div class="mode">
        <a class="active" href="/#">back to home</a>
	</div>
</main>

<style lang="scss">
    .help{
        margin-bottom:30px;
        span{
            font-size: 14px;
        }
        .qna{
            color:#1488CC;
            font-weight:bold;
            padding:10px 0px;
            display:block;
        }
        ul{
            padding:0px 0px 40px 0px;
            margin:0px;
            &>li{
                list-style-type: none;
            }
        }
        ol{
           padding:0px 0px 0px 30px;
            li{
                padding:0px 0px 10px 0px;
            }
        }
        padding:20px;
        h1{
            font-size:20px;
            padding:0px;
            margin:0px 0px 20px 0px;
        }
        h3{
            font-size: 14px;
            padding:0px;
            margin:0px;
            color:#555;
        }
    }
    .mode{
		position:fixed;
		bottom:0px;
		z-index:2;
		background:#fff;
		box-shadow: 0px 1px 3px #ccc;
		width:100%;
		left:0;
		a{
			border:none;
			width:100%;
			font-size: 12px;
			padding:15px 0px;
			color:#1488CC;
			text-transform: uppercase;
			font-weight:bold;
            display:block;
            text-align: center;
		}
		.active{
			background: #1488CC;
			color:#fff;
		}
	}
</style>